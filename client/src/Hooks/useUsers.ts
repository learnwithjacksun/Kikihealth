import appwrite from "@/Config/appwrite";
import { useQuery } from "@tanstack/react-query";
import { Models, Query } from "appwrite";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useUsers = () => {
  const [members, setMembers] = useState<Models.Document[] | undefined>([]);
  const onError = (error: Error) => {
    console.log(error);
    toast.error((error as Error).message);
  };

  const fetchUsers = async () => {
    try {
      const response = await appwrite.databases.listDocuments(
        appwrite.DB,
        appwrite.USERS,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents;
    } catch (error) {
      onError(error as Error);
    }
  };

  const {
    data: users,
    isSuccess,
    isFetching: isFetchingMemebers,
  } = useQuery({
    queryKey: ["members"],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if (isSuccess) {
      setMembers(users);
    }
  }, [isSuccess, users]);

  return {
    members,
    isFetchingMemebers,
  };
};

export default useUsers;
