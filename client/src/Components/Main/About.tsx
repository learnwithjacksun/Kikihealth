import { BookCheck } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="bg-green-800/10 py-10">
      
      <div className="main grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 min-h-[400px] items-center ">
        <div className="space-y-4">
            <h1 className="text-4xl font-bold text-green-800">
        About Us
      </h1>
          <p className="text-justify md:text-left">
            Simple Eats is an initiative, looking to provide individuals and
            communities with a sustainable way of eating while taking into
            account their health and well being. Our main focus is to provide
            the public with detailed and well researched health information
            surrounding nutritional food benefits, illness prevention and other
            health related topic.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link
              to="/login"
              className="btn btn-primary h-11 px-6 rounded-md"
            >
                <BookCheck/>
              Book an appointment
            </Link>
           
          </div>
        </div>
        <div className="h-full bg-green-800/10 min-h-[350px] rounded-md"></div>
      </div>
    </div>
  );
};

export default About;
