import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Home, ServiceDetails } from "@/Pages/Main";
import { ScrollToTop } from "@/Components/UI";
import { Login, Register } from "./Pages/Auth";
import { Dashboard } from "./Pages/Dashboard";
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
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-4xl text-green-700 font-bold text-center">
                404 <br />{" "}
                <span className="font-light text-2xl">Page Not Found</span>
              </h1>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
