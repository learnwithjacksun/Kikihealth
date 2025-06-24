import { Book } from "lucide-react"

const RecentBlogs = () => {
  return (
     <div className="layout py-10 space-y-10 ">
      <h1 className="text-4xl main text-center text-green-800 font-bold">
        Recent Blogs
      </h1>

      <div className="bg-secondary p-4 center flex-col space-y-4">
        <div className="h-14 w-14 rounded-full bg-yellow-100 text-yellow-800 center"><Book/></div>
        <p className="text-muted">There are no blogs yet!</p>
      </div>
      </div>
  )
}

export default RecentBlogs