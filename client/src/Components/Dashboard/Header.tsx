import {
  Bell,
  ChevronDown,
  ChevronUp,
  Menu,
  MessageSquareText,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonWithLoader } from "../UI";
import { useAuth } from "@/Hooks";

const Header = () => {
  const { userData, logout, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDrop = () => {
    setIsDrop((prev) => !prev);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-line">
        <nav className="w-[90%] relative mx-auto md:h-[70px] h-[60px] flex items-center justify-between">
          <div
            onClick={toggleMenu}
            className="cursor-pointer flex items-center justify-center visible md:invisible"
          >
            <Menu />
          </div>

          <div className="flex items-center justify-between gap-6">
            <div>
              <Link
                to="/notifications"
                className="h-11 w-11 relative rounded-full bg-secondary center hover:bg-white/90 transition-all duration-200"
              >
                <Bell size={20} className="text-muted" />
                <div className="absolute top-0 right-0">
                  <span className="relative flex size-[10px">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex size-[10px] rounded-full bg-green-500"></span>
                  </span>
                </div>
              </Link>
            </div>

            <div
              onClick={toggleDrop}
              className="flex items-center cursor-pointer gap-4"
            >
              <p className="hidden md:block text-muted">
                {userData?.firstname} {userData?.lastname}
              </p>
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="h-11 w-11 rounded-full bg-green-800 text-white font-medium text-lg center">
                  {userData?.firstname.charAt(0)}
                  {userData?.lastname.charAt(0)}
                </div>
                {isDrop ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
              </div>
            </div>
          </div>

          {/* dropdown */}
          {isDrop && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full right-0 shadow-xl z-40 min-w-[200px] rounded-xl bg-white p-2 border border-line"
            >
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/profile"
                    className="text-muted font-medium text-sm flex items-center hover:bg-secondary p-2 rounded-lg gap-2 hover:text-green-700 transition-colors duration-200"
                  >
                    <UserRound size={18} /> Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-muted font-medium text-sm flex items-center hover:bg-secondary p-2 rounded-lg gap-2 hover:text-green-700 transition-colors duration-200"
                  >
                    <MessageSquareText size={18} /> Direct Messages{" "}
                    <span className="bg-yellow-500 text-[#222] px-2 rounded-lg">
                      New
                    </span>
                  </Link>
                </li>

                <ButtonWithLoader
                  onClick={logout}
                  loading={loading}
                  initialText="Logout"
                  loadingText="Logging out..."
                  className="h-9 bg-red-500 mt-4 text-white rounded-lg text-sm"
                />
              </ul>
            </motion.div>
          )}
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && <MobileSidebar isOpen={isOpen} onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
