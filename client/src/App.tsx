import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Home, ServiceDetails } from "@/Pages/Main";
import { ScrollToTop } from "@/Components/UI";
import { Login, Register } from "./Pages/Auth";
import {
  Dashboard,
  Forum,
  Members,
  Notifications,
  Profile,
  Services,
} from "./Pages/Dashboard";
import Notfound from "./Pages/Notfound";
import { ProtectedRoute } from "./middleware";
import { useAuth } from "./Hooks";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const { checkAuth } = useAuth();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Toaster position="top-center" richColors />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/members" element={<Members />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
