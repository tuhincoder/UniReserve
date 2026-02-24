import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import { MdOutlineMail, MdOutlinePhoneForwarded } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, LogOutUser } = useAuth();

  const handleLogout = () => {
    LogOutUser()
      .then(() => {})
      .catch((error) => console.error("Logout Error:", error));
  };

  useEffect(() => {
    const handleScroll = () => {
      // 50px niche scroll korle isScrolled true hobe
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` hidden md:block w-full z-[60] bg-[#890c25] text-white transition-all duration-500 ease-in-out
        /* Desktop-e scroll korle upore uthe jabe (Height zero hoye jabe) */
        ${
          isScrolled
            ? "lg:-translate-y-full lg:opacity-0 lg:h-0"
            : "translate-y-0 opacity-100 h-auto"
        }
        /* Mobile-e eti sadharon bhabe thakbe, scroll-er sathe fixed hobe na */
        relative lg:block
      `}
    >
      <div
        className={`max-w-7xl mx-auto px-4 lg:px-8 transition-all ${
          isScrolled ? "lg:py-0" : "py-2 md:py-3"
        }`}
      >
        <div className="flex justify-between items-center text-xs md:text-sm">
          {/* Left Side: Contact Info */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <MdOutlinePhoneForwarded className="text-base" />
              <span className="hidden xs:inline">+0081537847</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <MdOutlineMail className="text-base" />
              <span>college.admission@gmail.com</span>
            </div>

            <div className="hidden xl:flex items-center gap-1.5 opacity-80">
              <IoMdTime className="text-base" />
              <span>Sun - Fri: 9 AM - 6 PM</span>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex items-center gap-3 md:gap-6">
            <div
              className="flex items-center gap-1.5 cursor-pointer hover:text-gray-300 transition-colors tooltip tooltip-bottom"
              data-tip="Coming Soon!"
            >
              <IoChatbubblesSharp className="text-base" />
              <span className="hidden md:inline">Live Chat</span>
            </div>

            <div className="flex items-center gap-2 border-l border-white/20 pl-3 md:pl-6">
              {user ? (
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="hidden md:block text-xs font-medium">
                    {user?.displayName?.split(" ")[0] || "User"}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md transition-all text-[10px] md:text-xs uppercase tracking-wider"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 bg-white text-[#890c25] px-3 py-1 rounded-md font-bold text-xs hover:bg-gray-100 transition-all shadow-sm"
                >
                  <FaRegUser />
                  <span>LOGIN</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
