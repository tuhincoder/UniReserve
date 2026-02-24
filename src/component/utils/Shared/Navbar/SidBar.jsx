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
  FaTimes,
} from "react-icons/fa";

const SidBar = ({ closeDrawer }) => {
  const { user, LogOutUser } = useAuth();

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {})
      .catch(() => {});
  };

  const navStyle = ({ isActive }) =>
    `flex items-center gap-4 px-6 py-4 w-full rounded-2xl transition-all duration-300 font-black uppercase text-[10px] tracking-[0.2em] ${
      isActive
        ? "bg-[#890c25] text-white shadow-xl shadow-[#890c25]/30"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    /* FIX 1: 'fixed inset-0' pura screen block korbe.
       FIX 2: 'z-[9999]' ensure korbe eta shobar upore thakbe.
       FIX 3: 'bg-white' solid thaktei hobe.
    */
    <div className="fixed inset-0 w-full h-full bg-white z-[9999] flex flex-col shadow-2xl">
      {/* Header Section: Logo & Close Button */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#890c25] rounded-xl flex items-center justify-center text-white font-black text-xl">
            U
          </div>
          <h2 className="text-xl font-black text-gray-900 tracking-tighter">
            UniReserve
          </h2>
        </div>
        <button
          onClick={closeDrawer}
          className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-[#890c25]"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Navigation Area: Scrollable link area */}
      <div className="flex-1 overflow-y-auto px-4 py-8 space-y-3 no-scrollbar">
        <p className="px-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">
          Main Navigation
        </p>

        <NavLink onClick={closeDrawer} to="/" className={navStyle}>
          <FaHome className="text-lg" /> Home
        </NavLink>

        <NavLink onClick={closeDrawer} to="/collage" className={navStyle}>
          <FaUniversity className="text-lg" /> Colleges
        </NavLink>

        <NavLink onClick={closeDrawer} to="/Admission" className={navStyle}>
          <FaUserGraduate className="text-lg" /> Admission
        </NavLink>

        <NavLink onClick={closeDrawer} to="/myCollage" className={navStyle}>
          <FaIdCard className="text-lg" /> My College
        </NavLink>

        <NavLink onClick={closeDrawer} to="/contact" className={navStyle}>
          <FaEnvelope className="text-lg" /> Contact Us
        </NavLink>
      </div>

      {/* Footer Area: Fixed Login/Logout Button */}
      <div className="p-6 border-t border-gray-100 shrink-0 bg-white">
        {user ? (
          <button
            onClick={() => {
              handleLogOut();
              closeDrawer();
            }}
            className="w-full flex items-center justify-center gap-4 bg-gray-50 text-red-600 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-50 transition-all"
          >
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <Link
            onClick={closeDrawer}
            to="/login"
            className="w-full flex items-center justify-center bg-[#890c25] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl shadow-[#890c25]/30"
          >
            Login Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default SidBar;
