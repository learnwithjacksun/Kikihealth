import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="main grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 min-h-[400px] py-10 md:py-0 items-center ">
        <div className="space-y-4">
            <h1 className="md:text-6xl text-5xl font-bold text-green-800">Simple Eats <br /> <span className="font-light">With KIKI</span></h1>
            <p className="text-justify md:text-left">Simple Eats with Kiki is envisioned towards activating systems and ensuring the implementation of strategies that will see to it that communities are rebuilt to yield healthier versions of themselves.</p>
            <div className="flex items-center gap-4 mt-4">
                <Link to="/register" className="btn btn-primary h-11 px-6 rounded-md">Get Started</Link>
                <a href="/#services" className="btn btn-secondary h-11 px-6 rounded-md">See Services</a>
            </div>
        </div>
        <div className="h-full bg-green-800/10 min-h-[350px] rounded-md"></div>
    </div>
  )
}

export default Hero