import { sidebarItems } from "@/Constants/data";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ButtonWithLoader } from "../UI";
import { motion } from "framer-motion";


const MobileSidebar = ({onClose}:{onClose: ()=> void}) => {
  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
onClick={onClose}
    className="fixed bg-black/50 inset-0 z-50"/>
      <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="h-screen absolute z-100 bg-background inset-y-0 w-[70%] hide-scrollbar flex flex-col overflow-y-scroll border-r border-line">
        <header className="flex px-6 items-center justify-between h-[70px]">
          <h3 className="text-xl font-pacifico text-green-800 font-medium">
            Simple Eats
          </h3>

          <button onClick={onClose} className="h-11 w-11 rounded-full text-muted bg-secondary hover:bg-green-300/20 center">
            <X size={24} />
          </button>
        </header>

        <ul className="space-y-4 mt-4">
          {sidebarItems.map((x, y) => (
            <li key={y}>
              <NavLink
                to={x.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-800 px-6 font-medium bg-green-500/10 flex items-center border-r-8 border-green-900 gap-2 p-3"
                    : "text-muted px-6 hover:bg-green-200/10 flex items-center gap-2 py-3 hover:text-green-800"
                }
              >
                <x.icon size={22} />
                <span> {x.title} </span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="ms-0 mt-auto mb-4">
          <ButtonWithLoader
            initialText="Logout"
            loadingText="Logging out..."
            className="w-full h-11 bg-red-500/10 text-red-500 hover:bg-red-500/20 font-semibold"
          />
        </div>
      </motion.div>
    </>
  );
};

export default MobileSidebar;
