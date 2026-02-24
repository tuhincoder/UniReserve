/* eslint-disable react/prop-types */
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import {
  AiOutlineCalendar,
  AiOutlineTrophy,
  AiOutlineBulb,
} from "react-icons/ai";

const SingleCoCard = ({ singleData }) => {
  const {
    image,
    name,
    admission_dates,
    events,
    research_history,
    sports,
    _id,
  } = singleData || {};

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const parts = dateString.split(" ");
    return parts.slice(0, 2).join(" ");
  };

  return (
    <div className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={image}
          alt={name}
        />

        <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-white">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[11px] font-black text-gray-800 uppercase tracking-tight">
            Apply by: {formatDate(admission_dates)}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-7 flex flex-col flex-grow">
        <h2 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-[#890c25] transition-colors line-clamp-1 uppercase tracking-tighter">
          {name}
        </h2>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#890c25]">
              <AiOutlineBulb className="text-lg" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Events
              </span>
            </div>
            <ul className="text-xs text-gray-500 font-semibold space-y-1">
              <li className="line-clamp-1"> {events?.[0]?.event1}</li>
              <li className="line-clamp-1"> {events?.[0]?.event2}</li>
            </ul>
          </div>

          <div className="space-y-2 border-l border-gray-100 pl-4">
            <div className="flex items-center gap-2 text-[#890c25]">
              <AiOutlineTrophy className="text-lg" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Sports
              </span>
            </div>
            <ul className="text-xs text-gray-500 font-semibold space-y-1">
              <li className="line-clamp-1"> {sports?.[0]?.sports1}</li>
              <li className="line-clamp-1"> {sports?.[0]?.sports2}</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 font-medium">
            <span className="text-[#890c25] font-bold">Research:</span>{" "}
            {research_history}
          </p>
        </div>

        <div className="mt-auto">
          <Link
            to={`/clgDetails/${_id}`}
            className="relative flex items-center justify-between w-full bg-gray-50 group/btn hover:bg-[#890c25] p-2 rounded-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
          >
            <span className="ml-4 text-sm font-black text-gray-800 group-hover/btn:text-white transition-colors duration-300">
              VIEW DETAILS
            </span>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover/btn:bg-white/20 group-hover/btn:text-white transition-all duration-500">
              <GoArrowUpRight className="text-2xl group-hover/btn:rotate-45 transition-transform duration-500" />
            </div>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCoCard;
