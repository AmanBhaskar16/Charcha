import { Link, useNavigate } from "react-router-dom";
import { User,AtSign, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { AuthLayout } from "../../components/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

export const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSigningUp } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signup(signupData)).unwrap();

      toast.success("Account created successfully");

      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Charcha and start chatting."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="input w-full">
          <User size={18} />
          <input
            className="grow"
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={signupData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label className="input w-full">
          <User size={18} />
          <input
            className="grow"
            type="text"
            name="username"
            placeholder="Username"
            value={signupData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </label>

        <label className="input w-full">
          <Mail size={18} />
          <input
            className="grow"
            type="email"
            name="email"
            placeholder="Email"
            value={signupData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>

        <label className="input w-full">
          <Lock size={18} />

          <input
            className="grow"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={signupData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </label>

        <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
          {isSigningUp ? "Creating Account..." : "Create Account"}
        </button>

        <div className="divider">OR</div>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};