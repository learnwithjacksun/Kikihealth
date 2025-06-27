import { DashboardLayout } from "@/Layouts"
import { CalendarHeart, HeartPulse, UserCheck, UsersRound } from "lucide-react"
import { Link } from "react-router-dom"

const Dashboard = () => {
  const stats = [
    {
      title: "Total Services",
      value: 2,
      icon: HeartPulse,
      color: "bg-pink-500/10 text-pink-500"
    },
    {
      title: "Active Service",
      value: 1,
      icon: CalendarHeart,
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Total Followers",
      value: 20,
      icon: UserCheck,
      color: "bg-green-500/10 text-green-500"
    },
    {
      title: "Total Following",
      value: 200,
      icon: UsersRound,
      color: "bg-yellow-500/10 text-yellow-500"
    }
    
  ]
  return (
    <>
    <DashboardLayout title="Dashboard">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl flex gap-4 space-y-4 border border-gray-100 p-3">
              <div className={`h-11 w-11 center rounded-lg ${stat.color}`}>
                <stat.icon size={22} />
              </div>
              <div className="space-y-2">
                <h4 className="text-muted">{stat.title}</h4>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/services"
            className="mt-4 inline-block bg-green-800 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Book a Service
          </Link>
          <Link
            to="/services"
            className="mt-4 inline-block bg-green-500/10 text-green-800 hover:bg-green-500/20 font-semibold px-6 py-3 rounded-lg"
          >
            Join Discussion
          </Link>
        </div>

        <div className="">
          <h3 className="text-green-800 font-medium">Recent Activities</h3>
          <div className="mt-4 bg-green-200/10 center h-30 rounded-lg">
            {/* Recent activities will go here */}
            <p className="text-muted">No recent activities yet.</p>
          </div>
        </div>
    </DashboardLayout>
    </>
  )
}

export default Dashboard