import { BookCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Founder = () => {
  return (
    <div className="bg-green-800/10 py-10 space-y-10">
      <h1 className="text-4xl main font-bold text-green-800 text-center mb-6" data-aos="fade-up">
        Meet Our <span className="font-light">Founder</span>
      </h1>
      <div className="main grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 min-h-[400px]">
        <div data-aos="fade-up">
          <div className=" bg-green-800/10 center h-[400px] overflow-hidden rounded-md">
            <img src="/founder.jpg" alt="Christyn" />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl text-green-800 font-semibold">
             Christyn E. Gobina-Green
            </h2>
            <p className="text-sm text-gray-600">Founder & President</p>
            <p>Clinical Nutritionist</p>
          </div>
        </div>

        <div className="space-y-4" >
          <p className="text-justify md:text-left" data-aos="fade-up">
            Christyn is a Clinical Nutritionist, with a passion for helping
            people, particularly women, achieve their health and wellness goals
            through the power of nutrition.
          </p>
          <p className="text-justify md:text-left" data-aos="fade-up">
            Christyn has always been active from a very young age. She was a
            member of the track and field team in her highschool and throughout
            her time at university. Starting her journey as a professional
            fitness trainer, she grew a deeper love and understanding of health
            and fitness and began doing her research and identifying gaps within
            the field that she was passionate about.
          </p>
          <p className="text-justify md:text-left" data-aos="fade-up">
            At the core of her practise is a focus in women's prenatal health,
            through which she founded the community support group Mother’s
            Connect. Mother’s Connect is a platform aimed at helping expecting,
            new and older moms share and learn from each other's experiences. It
            also serves as an all inclusive platform where mothers are able to
            consult with nutritionists, fitness trainers and get medical
            referrals on an array of health topics and issues they might be
            facing.
          </p>
          <p className="text-justify md:text-left" data-aos="fade-up">
            Christyn is a healthy cooking specialist, a captivating food
            enthusiast and an excellent communicator inspiring people to eat and
            live a sustainable and healthy lifestyle. Her instagram page
            @simpleeatswithkiki, is a mouth watering display of vibrant healthy
            dishes, their various benefits and much more.
          </p>
          <p className="text-justify md:text-left" data-aos="fade-up">
            Recently, Christyn is very well known for her platform and business
            Simple Eats with Kiki. She started this platform in an effort to
            help as many people as possible optimise their food and health
            choices. The initiative partners with local farmers to offer fresh
            and easily accessible food items you can make at home.
          </p>
          <p className="text-justify md:text-left" data-aos="fade-up">
            Her website is also packed with comprehensive and well researched
            health and wellness information and tips. Kiki has successfully
            created a unique way of interacting with and understanding food.
          </p>
          <p className="text-justify md:text-left" data-aos="fade-up">
           When she is not drowning in her creative process, you can find Kiki, spending quality time with her family, enjoying a nice British Columbia pale ale, or spending endless hours on facetime with her friends and family.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link to="/login" className="btn btn-primary h-11 px-6 rounded-md">
              <BookCheck />
             Schedule a consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
