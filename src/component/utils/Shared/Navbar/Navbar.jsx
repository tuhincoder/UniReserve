import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hook/useAuth";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineCheckSquare,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const { user, LogOutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    LogOutUser()
      .then(() => setIsOpen(false))
      .catch(console.error);
  };

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-bold text-[13px] tracking-wide ${
      isActive
        ? "bg-[#890c25] text-white shadow-md scale-105"
        : "text-gray-600 hover:bg-gray-100 hover:text-[#890c25]"
    }`;

  const navItems = (
    <>
      <NavLink
        to="/"
        className={navLinkStyles}
        onClick={() => setIsOpen(false)}
      >
        <AiOutlineHome className="text-lg lg:hidden" /> HOME
      </NavLink>
      <NavLink
        to="/collage"
        className={navLinkStyles}
        onClick={() => setIsOpen(false)}
      >
        <AiOutlineRead className="text-lg lg:hidden" /> COLLEGES
      </NavLink>
      <NavLink
        to="/Admission"
        className={navLinkStyles}
        onClick={() => setIsOpen(false)}
      >
        <AiOutlineCheckSquare className="text-lg lg:hidden" /> ADMISSION
      </NavLink>
      <NavLink
        to="/myCollage"
        className={navLinkStyles}
        onClick={() => setIsOpen(false)}
      >
        <AiOutlineUser className="text-lg lg:hidden" /> MY COLLEGE
      </NavLink>
    </>
  );

  return (
    <nav
      className={`sticky top-0 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl py-3 z-[1000]"
          : "bg-white py-6 z-[1000]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center relative">
        {/* Left Side: Brand Name */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#890c25] rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            U
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-800">
            Uni<span className="text-[#890c25]">Reserve</span>
          </span>
        </Link>

        {/* Desktop Central Menu */}
        <div className="hidden lg:flex items-center justify-center space-x-1 bg-gray-50/50 p-1 rounded-full border border-gray-100">
          {navItems}
        </div>

        {/* Desktop Right Side (Profile/Login) */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <img
                src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                alt="profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#890c25]/10"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 leading-none uppercase">
                  Account
                </span>
                <button
                  onClick={handleLogOut}
                  className="text-[11px] font-black text-[#890c25] hover:text-black uppercase transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-[#890c25] hover:bg-black text-white px-8 py-2.5 rounded-full text-xs font-black transition-all shadow-lg active:scale-95"
            >
              LOGIN
            </Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-3xl text-[#890c25] bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay & Menu */}
      <div
        className={`fixed inset-0 lg:hidden transition-all duration-500 ${
          isOpen ? "visible z-[2000]" : "invisible z-[-1]"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Content */}
        <div
          className={`absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl transition-transform duration-500 flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex justify-between items-center border-b-2 border-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#890c25] rounded-lg flex items-center justify-center text-white font-bold">
                U
              </div>
              <span className="font-black text-gray-800 tracking-tight">
                UniReserve
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl p-2 bg-gray-50 text-gray-500 hover:text-red-600 rounded-full transition-all"
            >
              <AiOutlineClose />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-3 flex-grow overflow-y-auto">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest mb-2">
              MAIN NAVIGATION
            </p>
            {navItems}
          </div>

          <div className="p-6 border-t bg-gray-50/50">
            {user ? (
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={user?.photoURL}
                    alt="user"
                    className="w-12 h-12 rounded-full border-2 border-[#890c25]/20 shadow-sm"
                  />
                  <div className="overflow-hidden">
                    <p className="font-black text-gray-800 truncate text-sm">
                      {user?.displayName}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate font-medium">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogOut}
                  className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-bold text-xs border border-red-100 active:scale-95 transition-transform"
                >
                  LOGOUT ACCOUNT
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-[#890c25] text-white text-center py-4 rounded-2xl font-black shadow-lg shadow-[#890c25]/20"
              >
                LOGIN NOW
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
