import appwrite from "@/Config/appwrite";
import { ID, Query } from "appwrite";
import { toast } from "sonner";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useNotify = () => {
  const { user } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false)
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

  const markAsRead = async (id: string | undefined)=>{
    if(!id) return
    setIsUpdating(true)
    try {
      await appwrite.databases.updateDocument(
        appwrite.DB,
        appwrite.NOTIFICATIONS,
        id,
        {
          isread: true
        }
      )
     fetchNotifications()
    } catch (error) {
      onError(error as Error)
    } finally{
      setIsUpdating(false)
    }
  }



  return {
    createNotification,
    fetchNotifications,
    notifications,
    isLoading,
    markAsRead,
    isUpdating
  };
};

export default useNotify;
