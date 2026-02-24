import { useLoaderData } from "react-router-dom";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMicroscope,
  FaRunning,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CollegeCardDetails = () => {
  const {
    image,
    name,
    admission_process,
    event_details,
    research_works,
    sports_categories,
  } = useLoaderData();

  return (
    <div className="bg-[#fcfcfc] min-h-screen pb-20">
      {/* Header / Banner Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#890c25] via-[#890c25]/40 to-transparent"></div>
        <div className="absolute bottom-10 left-0 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-xs font-black uppercase tracking-widest transition-all"
            >
              <FaArrowLeft /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">
              {name}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Side: Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Admission Process Card */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#890c25]/5 rounded-2xl flex items-center justify-center text-[#890c25] text-xl">
                  <FaGraduationCap />
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Admission Process
                </h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium">
                {admission_process}
              </p>
            </div>

            {/* Events & Research Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                <FaCalendarAlt className="text-[#890c25] text-3xl mb-4" />
                <h3 className="font-black uppercase tracking-widest text-xs mb-3">
                  Event Details
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {event_details}
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                <FaMicroscope className="text-[#890c25] text-3xl mb-4" />
                <h3 className="font-black uppercase tracking-widest text-xs mb-3">
                  Research Works
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {research_works}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Sidebar / Sports */}
          <div className="space-y-8">
            <div className="bg-[#890c25] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <FaRunning className="text-4xl text-yellow-400 mb-6" />
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-4 italic">
                  Sports & Culture
                </h2>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  {sports_categories}
                </p>
                <button className="w-full bg-white text-[#890c25] py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-400 hover:text-black transition-all">
                  Apply for Sports Quota
                </button>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
                Need more info?
              </p>
              <h4 className="font-black text-gray-900 mb-6">
                Download Prospectus
              </h4>
              <button className="text-[#890c25] font-black uppercase text-[10px] tracking-widest border-b-2 border-[#890c25] pb-1 hover:text-black hover:border-black transition-all">
                Click to View PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCardDetails;
