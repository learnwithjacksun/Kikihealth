import { Bell, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-line">
        <nav className="w-[90%] mx-auto md:h-[70px] h-[60px] flex items-center justify-between">
          <div className="cursor-pointer flex items-center justify-center visible md:invisible">
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

            <div className="flex items-center gap-4">
              <p className="hidden md:block text-muted">Gift Jackson</p>
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="h-11 w-11 rounded-full bg-green-800 text-white font-medium text-lg center">
                  GJ
                </div>
                <ChevronDown size={22} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
