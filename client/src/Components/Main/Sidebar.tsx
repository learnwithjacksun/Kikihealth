import { menuItems } from "@/Constants/data";
import { ChevronDown, X } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      ></motion.div>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.2 }}
        className="fixed inset-y-0 left-0 w-full max-w-[300px] bg-white z-50 flex flex-col"
      >
        <div className="flex items-center justify-between h-[70px] px-4">
          <div />
          <div className="flex items-center justify-center cursor-pointer text-black">
            <X size={24} onClick={onClose} />
          </div>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          {menuItems.map((x, y) => (
            <a
              key={y}
              onClick={onClose}
              href={x.path}
              className="text-md hover:bg-secondary px-4 py-2 font-medium"
            >
              {x.title}
            </a>
          ))}
          <li className="text-md hover:bg-secondary px-4 py-2 group font-medium flex items-center justify-between relative">
            More <ChevronDown size={20} />
            <div className="absolute w-full left-0 hidden group-hover:block top-full z-10">
              <ul className="bg-white shadow-lg rounded-md mt-2 overflow-hidden border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/blog">Blogs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="/project">Project Eat</a>
                </li>
                 <li className="px-4 py-2 hover:bg-gray-100">
                      <a href="/store">Store</a>
                    </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="flex items-center justify-center flex-col gap-4 p-4 ms-0 mt-auto mb-5">
          <Link
            to="/register"
            className="btn btn-primary w-full py-2 px-6 rounded-md text-white font-semibold"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="btn btn-secondary w-full py-2 px-6 rounded-md text-white font-semibold"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
