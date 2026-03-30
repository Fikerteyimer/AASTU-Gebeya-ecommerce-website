import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-blue-900 text-xl md:text-2xl font-bold">
          Campus <span className="text-blue-700">Gebeya</span>
        </h1>


        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <NavLink
                to={nav.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-bold"
                    : "text-blue-900 hover:text-blue-700"
                }
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side (ALWAYS visible now) */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </div>

          {/* Profile */}
          <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full">
            <FaUser className="text-gray-700 text-sm" />
          </div>

     
          <button
            className="md:hidden text-2xl text-blue-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((nav, index) => (
              <li key={index}>
                <NavLink
                  to={nav.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-900 hover:text-blue-700"
                >
                  {nav.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
};

export default NavBar;