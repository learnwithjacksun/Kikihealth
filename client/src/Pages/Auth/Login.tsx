import { ButtonWithLoader } from "@/Components/UI";
import { AuthLayout } from "@/Layouts";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchema } from "@/schemas/auth";
import { useAuth } from "@/Hooks";

const Login = () => {
  const { login, loading, user } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginSchema) => {
    login(data);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  return (
    <>
      <AuthLayout
        title="Welcome back"
        description="Login to your account to continue using KIKI"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email">
              E-mail Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g johndoe@mail.com"
              className="input w-full"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                placeholder="Min of 8 characters"
                className="input w-full"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-sm font-semibold text-green-700 absolute right-3 top-1/2 -translate-y-1/2"
              >
                {show ? "Hide" : "Show"}
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/forgot-password"
              className="text-green-700 underline underline-offset-2 font-semibold text-sm"
            >
              Forgotten password?
            </Link>
          </div>

          <ButtonWithLoader
            loading={loading}
            initialText="Login"
            loadingText="Logging in..."
            className="btn btn-primary rounded-md w-full h-10 mt-4"
          />
        </form>

        <p className="text-muted text-center text-sm">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-700 underline underline-offset-2 font-semibold"
          >
            Register
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default Login;
