import { useAuth } from "@/Hooks";
import { Loader } from "lucide-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, isCheckingAuth } = useAuth();

  if (isCheckingAuth) {
    return (
      <>
        <div className="center h-[100dvh] bg-background">
          <div className="center gap-2">
            <Loader size={20} className="animate-spin text-green-800" />{" "}
            <p>Please wait...</p>
          </div>
        </div>
      </>
    );
  }

  return !isCheckingAuth && user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
