import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hook/useAuth";
import {
  FaHome,
  FaUniversity,
  FaUserGraduate,
  FaIdCard,
  FaEnvelope,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";

const SidBar = () => {
  const { user, LogOutUser } = useAuth();

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {})
      .catch(() => {});
  };

  // NavLink-er jonno common style function
  const navStyle = ({ isActive }) =>
    `flex items-center gap-4 px-6 py-3 w-full rounded-xl transition-all duration-300 font-bold uppercase text-[10px] tracking-widest ${
      isActive
        ? "bg-[#890c25] text-white shadow-lg shadow-[#890c25]/30"
        : "text-gray-500 hover:bg-gray-100 hover:text-[#890c25]"
    }`;

  return (
    <div className="flex flex-col items-center gap-3 p-4 w-full h-full bg-white">
      {/* Sidebar Logo ba Title (Optional) */}
      <div className="mb-10 text-center">
        <h2 className="text-xl font-black text-[#890c25] tracking-tighter italic">
          CAMPUS PRO
        </h2>
        <div className="w-10 h-1 bg-[#890c25] mx-auto mt-1 rounded-full"></div>
      </div>

      {/* Navigation Links */}
      <NavLink to="/" className={navStyle}>
        <FaHome className="text-sm" /> Home
      </NavLink>

      <NavLink to="/collage" className={navStyle}>
        <FaUniversity className="text-sm" /> Colleges
      </NavLink>

      <NavLink to="/Admission" className={navStyle}>
        <FaUserGraduate className="text-sm" /> Admission
      </NavLink>

      <NavLink to="/myCollage" className={navStyle}>
        <FaIdCard className="text-sm" /> My College
      </NavLink>

      <NavLink to="/contact" className={navStyle}>
        <FaEnvelope className="text-sm" /> Contact Us
      </NavLink>

      {/* Auth Section */}
      <div className="mt-auto w-full border-t border-gray-100 pt-6">
        {user ? (
          <button
            onClick={handleLogOut}
            className="flex items-center gap-4 px-6 py-3 w-full rounded-xl font-black uppercase text-[10px] tracking-widest text-red-600 hover:bg-red-50 transition-all"
          >
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <NavLink to="/login" className={navStyle}>
            <FaSignInAlt /> Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default SidBar;
