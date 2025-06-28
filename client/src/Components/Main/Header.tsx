import { menuItems } from "@/Constants/data";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <header className="sticky top-0 backdrop-blur-md bg-white/70 z-30">
        <nav className="main flex justify-between items-center h-auto py-2">
          <a href="/">
            <img src="/logo.avif" alt="kiki logo" width={80} />
          </a>
          <div className="flex items-center md:gap-8 gap-4">
            <ul className="md:flex hidden items-center gap-6 border-r-2 border-gray-300 pr-6">
              {menuItems.map((x, y) => (
                <li key={y}>
                  <a href={x.path} className="">
                    {" "}
                    {x.title}{" "}
                  </a>
                </li>
              ))}
              <li className="center gap-2 relative group cursor-pointer">
                More <ChevronDown size={20} />
                <div className="absolute min-w-[150px] hidden group-hover:block top-full z-10">
                  <ul className="bg-white shadow-lg rounded-md mt-2 overflow-hidden border border-gray-200">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/blog">Blog</Link>
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

            <Link
              to="/login"
              className="btn btn-primary py-2 px-6 rounded-md text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Login
            </Link>

            <div
              onClick={handleMenuClick}
              className="cursor-pointer flex items-center justify-center md:hidden h-11 w-11"
            >
              <Menu />
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && <Sidebar isOpen={isOpen} onClose={handleMenuClick} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
