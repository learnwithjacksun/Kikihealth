import { useNotify } from "@/Hooks";
import { DashboardLayout } from "@/Layouts";
import { Loader, Tv2 } from "lucide-react";
import { toast } from "sonner";

const Notifications = () => {
  const { notifications, markAsRead, isUpdating } = useNotify();
  const unreadNotification = notifications?.filter(
    (x) => x.isread === false
  ).length;
  return (
    <>
      <DashboardLayout title="Notifications">
        <div className="flex items-center justify-between bg-secondary rounded-lg py-2 pl-4 pr-2">
          <p className="text-sm text-muted font-medium">
            Unread:{" "}
            <span className="text-yellow-600 font-semibold text-base">
              {" "}
              {unreadNotification}{" "}
            </span>
          </p>
          <button
            onClick={() => {
              toast.warning("Feature not available yet!");
            }}
            className="bg-green-800/10 text-green-800 h-9 text-sm px-4 rounded-md"
          >
            Mark all as read
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notifications?.map((x, y) => (
            <div
              key={y}
              className="flex items-start gap-4 p-4 border border-line rounded-lg bg-background hover:border-green-800 relative"
            >
              {/* Read/Unread Indicator */}
              {x.isread ? (
                <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-muted"></span>
              ) : (
                <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-yellow-600"></span>
              )}
              {/* change to bg-muted for read */}
              {/* Icon */}
              <div className="bg-green-800/10 min-h-9 min-w-9 center rounded-md text-green-800">
                <Tv2 size={20} />
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-base"> {x.title}</h3>
                <p className="text-sm text-muted mt-1">{x.description}</p>
                <p className="text-xs text-muted mt-2">
                  {new Date(x.$createdAt).toLocaleDateString()}
                </p>

                {!x.isread && (
                  <button
                    onClick={() => markAsRead(x.$id)}
                    className="mt-3 text-xs font-medium text-green-800"
                  >
                    {isUpdating && (
                      <Loader size={16} className="animate-spin text-muted" />
                    )}{" "}
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  );
};

export default Notifications;
