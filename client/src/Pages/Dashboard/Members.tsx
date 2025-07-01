import { DashboardLayout } from "@/Layouts";
import { Heart, Search } from "lucide-react";
import { useState } from "react";

const Members = () => {
    const [search, setSearch] = useState("")
  return (
    <>
      <DashboardLayout title="Members">
        <div className="border border-line rounded-lg flex items-center gap-2 pl-2 bg-secondary">
          <Search size={22} className="text-muted" />
          <input
            type="text"
            name="search"
            placeholder="Search by name or email"
            className="h-11 w-full"
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-line p-4 rounded-lg">
            <div className="flex gap-4 pb-3">
              <div className="h-14 w-14 rounded-full center bg-green-800/10 text-green-800 text-lg font-semibold">
                GJ
              </div>
              <div>
                <h3 className="font-medium">Gift Jacksun</h3>
                <p className="text-sm text-muted">giftjacksun@gmail.com</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between border-t border-line pt-3">
                <p className="text-sm">
                  {" "}
                  Followers:{" "}
                  <span className="text-green-800 font-semibold">3</span>
                </p>
                <button>
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="border border-line p-4 rounded-lg">
            <div className="flex gap-4 pb-3">
              <div className="h-14 w-14 rounded-full center bg-green-800/10 text-green-800 text-lg font-semibold">
                GJ
              </div>
              <div>
                <h3 className="font-medium">Gift Jacksun</h3>
                <p className="text-sm text-muted">giftjacksun@gmail.com</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between border-t border-line pt-3">
                <p className="text-sm">
                  {" "}
                  Followers:{" "}
                  <span className="text-green-800 font-semibold">3</span>
                </p>
                <button>
                  <Heart size={22} fill="green" stroke="0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Members;
