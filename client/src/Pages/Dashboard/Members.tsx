import { useAuth, useUsers } from "@/Hooks";
import { DashboardLayout } from "@/Layouts";
import { Heart, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Members = () => {
  const { user } = useAuth();
  const { members, isFetchingMemebers } = useUsers();
  const [search, setSearch] = useState("");

  const filteredMembers = members?.filter((member) => {
    const fullName = `${member.firstname} ${member.lastname}`.toLowerCase();
    const email = member.email?.toLowerCase();
    return (
      fullName.includes(search.toLowerCase()) ||
      email?.includes(search.toLowerCase())
    );
  });

  const getInitials = (first: string, last: string) =>
    `${first?.charAt(0) || ""}${last?.charAt(0) || ""}`.toUpperCase();

  return (
    <DashboardLayout title="Members">
      <div className="mb-6">
        <div className="border border-line rounded-lg flex items-center gap-2 pl-2 bg-secondary">
          <Search size={22} className="text-muted" />
          <input
            type="text"
            name="search"
            placeholder="Search by name or email"
            className="h-11 w-full bg-transparent outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {isFetchingMemebers ? (
        <p className="text-muted text-sm">Loading members...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMembers?.length ? (
            filteredMembers.map((member) => (
              <div
                key={member.$id}
                className="border border-line relative p-4 rounded-lg bg-background"
              >
                {member.$id === user?.$id && (
                  <p className=" absolute top-2 right-2 bg-green-600/10 text-green-800 text-xs rounded-full px-3 py-1 font-medium">
                    Myself
                  </p>
                )}
                <div className="flex gap-4 pb-3">
                  <div className="h-14 w-14 rounded-full center bg-green-800/10 text-green-800 text-lg font-semibold">
                    {getInitials(member.firstname, member.lastname)}
                  </div>
                  <div>
                    <h3 className="font-medium">
                      {member.firstname} {member.lastname}
                    </h3>
                    <p className="text-sm text-muted">{member.email}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between border-t border-line pt-3">
                    <p className="text-sm">
                      Followers:{" "}
                      <span className="text-green-800 font-semibold">
                        {" "}
                        {member.followers}{" "}
                      </span>
                    </p>
                    <button onClick={()=>{
                      toast.warning("Feature not available yet!")
                    }}>
                      <Heart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted text-sm">No matching members found.</p>
          )}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Members;
