import appwrite from "@/Config/appwrite";
import { Models } from "appwrite";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStoreTypes {
  user: Models.User<Models.Preferences> | null;
  userData: Models.Document | null;
  setUserData: (userData: Models.Document | null) => void;
  isCheckingAuth: boolean;
  checkAuth: () => Promise<void>;
  fetchUser: () => Promise<void>;
}

const useAuthStore = create<AuthStoreTypes>()(
  persist(
    (set, get) => ({
      user: null,
      userData: null,
      isCheckingAuth: false,
      checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
          const response = await appwrite.account.get();
          if (response) {
            const userData = await appwrite.databases.getDocument(
              appwrite.DB,
              appwrite.USERS,
              response.$id
            );
            set({ user: response });
            set({ userData });
          } else {
            set({ user: null });
          }
        } catch (error) {
          console.log(error);
          set({ user: null });
        } finally {
          set({ isCheckingAuth: false });
        }
      },
      setUserData: (userData: Models.Document | null) => set({ userData }),
      fetchUser: async () => {
        try {
          const userId = get()?.user?.$id;
          if (!userId) return;
          const result = await appwrite.databases.getDocument(
            appwrite.DB,
            appwrite.USERS,
            userId
          );
          set({ userData: result });
        } catch (error) {
          console.log(error);
        }
      },
    }),
    {
      name: "auth",
      partialize: (state) => ({
        user: state.user,
        userData: state.userData,
      }),
    }
  )
);

export default useAuthStore;
