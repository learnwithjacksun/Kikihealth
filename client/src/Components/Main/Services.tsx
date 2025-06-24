import { services } from "@/Constants/data";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className="main py-10 space-y-10 ">
      <h1 className="text-4xl main text-center text-green-800 font-bold">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((x, y) => (
          <div
            key={y}
            className="space-y-4 bg-green-500/10 rounded-lg overflow-hidden"
          >
            <div className="overflow-hidden">
              <img src={x.image} className="w-full object-fit-cover" />
            </div>
            <div className="pb-4 px-4 space-y-2">
              <p className="text-lg font-medium">{x.title}</p>
              <Link
                to={`/services/${x.id}`}
                className="flex items-center gap-2 text-green-800 underline underline-offset-2 font-medium"
              >
                See details <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
