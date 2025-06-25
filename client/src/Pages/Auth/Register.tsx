import { ButtonWithLoader } from "@/Components/UI";
import { AuthLayout } from "@/Layouts";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(false);
  const togglePasswordVisibility = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <AuthLayout
        title="Join KIKI health"
        description="Create an account with your credentials to continue"
      >
        <form className="space-y-4">
          <div>
            <label htmlFor="firstname">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="e.g John"
              className="input w-full"
            />
          </div>
          <div>
            <label htmlFor="lastname">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="e.g Doe"
              className="input w-full"
            />
          </div>
          <div>
            <label htmlFor="email">
              E-mail Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g johndoe@mail.com"
              className="input w-full"
            />
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
              />
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer text-sm font-semibold text-green-700 absolute right-3 top-1/2 -translate-y-1/2"
              >
                {show ? "Hide" : "Show"}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name=""
              id="agree"
              className="accent-green-700"
            />
            <label htmlFor="agree" className="ml-2 text-sm">
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-green-700 underline underline-offset-2 font-medium"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-green-700 underline underline-offset-2 font-medium"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <ButtonWithLoader
            initialText="Login"
            loadingText="Logging in..."
            className="btn btn-primary rounded-md w-full h-10 mt-4"
          />
        </form>

        <p className="text-muted text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-700 underline underline-offset-2 font-semibold"
          >
            Login
          </Link>
        </p>
      </AuthLayout>
    </>
  );
};

export default Register;
