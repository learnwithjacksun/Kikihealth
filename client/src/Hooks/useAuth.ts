import appwrite from "@/Config/appwrite";
import { LoginSchema, RegisterSchema } from "@/schemas/auth";
import { useAuthStore } from "@/Store";
import { ID } from "appwrite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const useAuth = () => {
  const {
    user,
    userData,
    checkAuth,
    isCheckingAuth,
    fetchUser,
    setUserData,
    setUser,
  } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onError = (error: Error) => {
    console.log(error);
    toast.error((error as Error).message);
  };

  const registerUser = async (data: RegisterSchema) => {
    setLoading(true);
    try {
      const response = await appwrite.account.create(
        ID.unique(),
        data.email,
        data.password
      );
      await appwrite.account.createEmailPasswordSession(
        data.email,
        data.password
      );

      await checkAuth();

      await appwrite.databases.createDocument(
        appwrite.DB,
        appwrite.USERS,
        response.$id,
        {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
        }
      );
      await appwrite.databases.createDocument(
        appwrite.DB,
        appwrite.NOTIFICATIONS,
        ID.unique(),
        {
          user: response.$id,
          title: "System Notification",
          description:
            "You successfully created an account. Welcome to Simple Eats with Kiki.",
          type: "system",
        }
      );
      await fetchUser();
      toast.success("Account created!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const login = async (data: LoginSchema) => {
    setLoading(true);
    try {
      await appwrite.account.createEmailPasswordSession(
        data.email,
        data.password
      );

      const loggedInUser = await appwrite.account.get();

      await appwrite.databases.createDocument(
        appwrite.DB,
        appwrite.NOTIFICATIONS,
        ID.unique(),
        {
          user: loggedInUser.$id,
          title: "System Notification",
          description:
            "You successfully logged. If this wasn't you, please secure your account immediately.",
          type: "system",
        }
      );

      await checkAuth();
      await fetchUser();
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      onError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await appwrite.account.deleteSession("current");
      toast.success("Logout successful!");
      navigate("/login");
      setUserData(null);
      setUser(null);
    } catch (error) {
      onError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    userData,
    checkAuth,
    isCheckingAuth,
    loading,
    registerUser,
    login,
    logout,
  };
};

export default useAuth;
