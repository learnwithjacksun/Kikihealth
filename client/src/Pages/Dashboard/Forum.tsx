import { DashboardLayout } from "@/Layouts"
import { ChevronRight, MessageSquareText } from "lucide-react"
import { Link } from "react-router-dom"

const Forum = () => {
    const categories = [
        {
            title: "General Discussion",
            desc: "Share stories, ideas, pictures and more!",
            value: 4,
            path: "discussion"
        },
        {
            title: "Question & Answers",
            desc: "Get answers and share knowledge.",
            value: 4,
            path: "question"
        },
        {
            title: "Direct Messages",
            desc: "Your personal messages",
            value: 4,
            path: "dm"
        },
    ]
  return (
    <>
    <DashboardLayout title="Forum">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                {categories.map((x,y)=>(
                    <div key={y} className="border border-line rounded-lg">
                        <div className="px-4 py-6">
                            <h3 className="font-medium"> {x.title} </h3>
                            <p className="text-sm text-muted"> {x.desc} </p>
                        </div>
                        <div className="p-4 flex items-center justify-between bg-secondary">
                            <div className="center gap-2"><MessageSquareText size={22}/> <span> {x.value} </span></div>

                            <Link to={x.path}  className="btn text-sm">
                            View <ChevronRight size={20}/>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
    </DashboardLayout>
    </>
  )
}

export default Forum