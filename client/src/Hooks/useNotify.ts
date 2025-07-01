import appwrite from "@/Config/appwrite";
import { ID, Query } from "appwrite";
import { toast } from "sonner";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useNotify = () => {
  const { user } = useAuth();
  const onError = (error: Error) => {
    console.log(error);
    toast.error((error as Error).message);
  };

  const createNotification = async (
    title: string,
    description: string,
    type: "system" | "service" | "profile"
  ) => {
    try {
      await appwrite.databases.createDocument(
        ID.unique(),
        appwrite.DB,
        appwrite.NOTIFICATIONS,
        {
          user: user?.$id,
          title,
          description,
          type,
        }
      );
    } catch (error) {
      onError(error as Error);
    }
  };

  const fetchNotifications = async () => {
    try {
      if (!user) return;
      const response = await appwrite.databases.listDocuments(
        appwrite.DB,
        appwrite.NOTIFICATIONS,
        [Query.orderDesc("$createdAt"), Query.equal("user", user?.$id)]
      );
      return response.documents;
    } catch (error) {
      onError(error as Error);
    }
  };

  const {data: notifications, isLoading} = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications
  })



  return {
    createNotification,
    fetchNotifications,
    notifications,
    isLoading
  };
};

export default useNotify;
