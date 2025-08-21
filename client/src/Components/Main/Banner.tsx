import { BookCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div id="banner" className=" py-10">
      <div className="main grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 min-h-[400px] items-center ">
        <div className="space-y-4" data-aos="fade-up">
          <h1 className="md:text-7xl text-5xl font-bold text-green-800">
            We are here to help you
          </h1>
          <p className="text-justify md:text-left">
            Book a consultation with us and get a free meal plan. We are here to
            help you achieve your health goals.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link to="/login" className="btn bg-yellow-500 text-white h-11 px-6 rounded-md">
              <BookCheck />
              Schedule a consultation
            </Link>
          </div>
        </div>
        <div className=" bg-yellow-500 h-[350px] rounded-md overflow-hidden" data-aos="fade-up">
          <img
            src="/banner.jpg"
            className="w-full h-full object-cover rotate-3 scale-[.9] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
