import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen center">
      <div className="md:w-[480px] w-[90%] mx-auto space-y-4 p-4 bg-secondary rounded-lg">
        <h1 className="text-6xl text-green-700 font-bold text-center">404</h1>
        <div>
          <p className="text-muted text-sm text-center">
            Page not found. Please check the URL or perhaps the developer is
            still cooking. 🥱
          </p>
        </div>

        <div
          className="center gap-2 underline underline-offset-2 cursor-pointer text-green-800 hover:text-green-600"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
          <span> Go back to previous page</span>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
