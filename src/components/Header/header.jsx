import { useState } from "react";
import { NavLink } from "react-router";
import { images } from "../../assets";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="py-4 sticky top-0 bg-[#EFEFEF] z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-0">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <img src={images.logo} alt="logo" className="w-8 h-8" />
          <h2 className="text-2xl md:text-3xl font-extrabold">Phudu</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-between items-center space-x-8 text-sm text-[#0F0F0FB2] font-[500]">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 pb-1 ${
                    isActive ? "text-[#0F0F0F]" : "hover:text-[#0F0F0F]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[#0F0F0F] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="btn-primary">Emergency</button>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none group cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-[2px] bg-black rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] bg-black rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] bg-black rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-[#EFEFEF]  transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 text-sm text-[#0F0F0FB2] font-[500]">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)} // close on click
                className={({ isActive }) =>
                  `transition-colors duration-300 pb-1 ${
                    isActive ? "text-[#0F0F0F]" : "hover:text-[#0F0F0F]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-[#0F0F0F] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
          <button className="btn-primary w-[90%]">Emergency</button>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
