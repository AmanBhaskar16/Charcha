import { Link,useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { AuthLayout } from "../../components/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../../store/slice/auth/authThunk";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggingIn } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(login(loginData)).unwrap();

      toast.success("Login successful");

      navigate("/");
    } catch (error) {
      toast.error(error);
    }
};

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue chatting on Charcha."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="input w-full">
          <Mail size={18} />

          <input
            className="grow"
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
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
            value={loginData.password}
            onChange={handleChange}
            autoComplete="current-password"
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

        <div className="text-right">
          <button
            type="button"
            className="text-sm text-primary hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? "Logging in..." : "Login"}
        </button>

        <div className="divider">OR</div>

        <p className="text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};