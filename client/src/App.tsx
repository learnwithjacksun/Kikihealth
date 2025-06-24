import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Home, ServiceDetails } from "@/Pages/Main";
import { ScrollToTop } from "@/Components/UI";
const App = () => {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
      </Routes>
    </>
  );
};

export default App;
