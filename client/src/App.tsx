import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Home, ServiceDetails } from "@/Pages/Main";
import { ScrollToTop } from "@/Components/UI";
import { Login, Register } from "./Pages/Auth";
import { Dashboard } from "./Pages/Dashboard";
import Notfound from "./Pages/Notfound";
const App = () => {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
