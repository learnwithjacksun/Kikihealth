import { Models } from "appwrite";
import { create } from "zustand";

interface NotificationType {
  notifications: Models.Document[];
  setNotifications: (notifications: Models.Document[]) => void;
}

const useNotificationStore = create<NotificationType>((set) => ({
  notifications: [],
  setNotifications: (notifications: Models.Document[]) =>
    set((state)=> ({notifications: {...state.notifications, ...notifications}})),
}));

export default useNotificationStore;
