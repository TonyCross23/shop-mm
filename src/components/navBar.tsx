import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router";
import { ShoppingBagIcon } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-gray-200 py-4 dark:bg-black/10 dark:backdrop-blur dark:border-gray-800">
      <div className="flex items-center justify-between px-4">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <ShoppingBagIcon className="text-4xl text-red-500" />
          <NavLink to="/" className="text-xl font-bold uppercase text-red-500">
            Shopping
          </NavLink>
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-bold mt-2"
                : "text-gray-600 dark:text-gray-300 hover:text-red-500 mt-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shopping"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-bold mt-2"
                : "text-gray-600 dark:text-gray-300 hover:text-red-500 mt-2"
            }
          >
            Shopping
          </NavLink>
          <a
            href="#contact"
            className=" dark:text-gray-300 hover:text-gray-200 bg-red-500 p-2 rounded-3xl px-3 text-white"
          >
            Contact
          </a>
        </div>

        {/* Right: Icon & Menu */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Menu Icon */}
          <div
            className="text-2xl bg-gray-100 dark:bg-neutral-900 p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross2 className="dark:text-white" />
            ) : (
              <IoMdMenu className="dark:text-white" />
            )}
          </div>
        </div>

{/* Mobile Menu */}
<div
  className={`absolute top-16 left-0 transition-all duration-300 ease-in-out bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-lg ${
    isOpen ? "w-full py-4 rounded-b-xl" : "w-0 h-0 overflow-hidden"
  } flex flex-col items-center border-t border-gray-300 dark:border-gray-700`}
>
  <div className="mt-1 flex flex-col w-full">
    {["/", "/shopping",].map((path, index) => {
      const labels = ["Home", "Shopping"];
      return (
        <NavLink
          key={index}
          to={path}
          className={({ isActive }) =>
            `text-center py-3 transition ${
              isActive
                ? "bg-red-500 text-white rounded-md mx-2 dark:text-black"
                : "hover:bg-gray-100 text-black dark:text-white dark:hover:text-black"
            }`
          }
        >
          {labels[index]}
        </NavLink>
      );
    })}
  </div>
</div>


      </div>
    </nav>
  );
};

export default NavBar;
