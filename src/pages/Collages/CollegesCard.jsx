/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaCalendarAlt } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { Link } from "react-router-dom";

const CollegesCard = ({ college }) => {
  const { image, name, rating, number_of_research, _id } = college || {};

  // --- Dynamic Year Logic ---
  // Eti auto-update hobe: 2026 hole dekhabe "2026-27"
  const currentYear = new Date().getFullYear();
  const nextYear = (currentYear + 1).toString().slice(-2);
  const dynamicSession = `${currentYear}-${nextYear}`;

  return (
    <div className="group h-full">
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden">
        {/* Image Section */}
        <div className="relative overflow-hidden h-56 md:h-64">
          <img
            className="w-full h-full object-cover transform group-hover:scale-110 duration-700"
            src={image}
            alt={name}
          />
          {/* Research Count Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
            <GiMaterialsScience className="text-[#890c25]" />
            <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tighter">
              {number_of_research} Researches
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4 gap-2">
            <h2 className="text-xl md:text-2xl font-black text-gray-800 leading-tight tracking-tighter uppercase group-hover:text-[#890c25] transition-colors">
              {name}
            </h2>
            <div className="pt-1 shrink-0">
              <Rating style={{ maxWidth: 80 }} value={rating} readOnly />
            </div>
          </div>

          {/* Meta Info - Dynamic Session */}
          <div className="flex items-center gap-4 text-gray-500 mb-6">
            <div className="flex items-center gap-2 bg-[#890c25]/5 px-3 py-1.5 rounded-lg border border-[#890c25]/10">
              <FaCalendarAlt className="text-[#890c25] text-xs" />
              <span className="text-[11px] font-black text-[#890c25] uppercase tracking-widest">
                Admission {dynamicSession}
              </span>
            </div>
          </div>

          {/* Explore Button */}
          <div className="mt-auto">
            <Link to={`/collages/${_id}`}>
              <button className="w-full h-12 bg-[#890c25] hover:bg-[#6e081d] text-white flex items-center justify-center gap-2 overflow-hidden rounded-xl relative group transition-all duration-300">
                <span className="font-black uppercase tracking-widest text-xs z-10 transition-all duration-500 group-hover:tracking-[0.2em]">
                  View Details
                </span>

                {/* Rocket/Arrow Animation */}
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute w-8 -translate-x-full translate-y-full opacity-0 group-hover:opacity-20 group-hover:translate-x-20 group-hover:-translate-y-10 duration-700 transition-all pointer-events-none fill-white"
                >
                  <path d="M244.5 662l268.1-446.4 268 446.4z"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesCard;
