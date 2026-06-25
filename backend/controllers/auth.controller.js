import {signupSchema, loginSchema} from '../validations/user.validation.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {generateToken} from '../utils/generateToken.js';

export const signup = async(req, res) => {
    try{
        const result = signupSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                errors: result.error.flatten().fieldErrors,
            });
        }

        const { fullName, username, email, password } = result.data;

        const existingEmail = await User.findOne({email});

        if(existingEmail){
            return res.status(400).json({
                success: false,
                message: "User with this email already exists",
            });
        }

        const existingUsername = await User.findOne({username});

        if(existingUsername){
            return res.status(400).json({
                success: false,
                message: "Username already taken",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({fullName,username,email,password : hashedPassword});
        await user.save();

        const token = generateToken(user._id);

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7*24*60*60*1000, // 7 days
        });

        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            user: {
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
            }
        });
    }catch(error){
        console.log("Signup Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export const login = async (req, res) => {
    try{
        const result = loginSchema.safeParse(req.body);

        if(!result.success){
            return res.status(400).json({
                success: false,
                errors: result.error.flatten().fieldErrors,
            });
        }

        const { email, password } = result.data;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }
        
        const token = generateToken(user._id);

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7*24*60*60*1000, // 7 days
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
            }
        });
    }catch(error){
        console.log("Login Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
