import { Link } from "react-router-dom"

const Project = () => {
  return (
    <div className="project relative center flex-col min-h-[400px] py-10">
        <div className="absolute inset-0 bg-yellow-900/70 z-10"></div>
        <div className="layout text-center relative z-20 space-y-4">
            <div className="h-40 w-40 center mx-auto bg-white rounded-full"><img src="/eats.avif" className="w-30" /></div>
            {/* <h2 className="text-yellow-200 text-3xl font-bold uppercase">Project E.a.t.s</h2> */}
            <p className="text-white mb-10">Over the years, It&apos;s been discovered that a lot of people in Nigeria and across Africa lack access and resources to food and water supply, which is needed daily, to live a healthy life. The key to solving this hunger epidemic is to address the root causes of the hunger with development projects that give a hand-up to our society.</p>
            <Link to="/projects" className="bg-yellow-200 text-yellow-800 px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors duration-300">
            Find out more
            </Link>
        </div>
    </div>
  )
}

export default Project