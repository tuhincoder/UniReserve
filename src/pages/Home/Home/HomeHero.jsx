import banner1 from "../../../assets/banner/banner2.jpg";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section className="relative min-h-[500px] h-[70vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={banner1}
          alt="University Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"></div>
      </div>

      {/* --- Content Area --- */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-8">
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full animate-fade-in">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Admission Open 2026
            </span>
          </div>

          {/* Main Heading - Responsive Font Sizes */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter uppercase">
            Shape Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 italic font-serif lowercase">
              future
            </span>{" "}
            Career.
          </h1>

          <p className="text-white/80 text-sm md:text-lg font-medium max-w-xl mx-auto leading-relaxed px-2">
            Find and apply to the best colleges that match your ambition. Join
            our global community of excellence.
          </p>

          {/* Search Bar - Slim on Mobile */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-white/10 backdrop-blur-xl p-2 md:p-3 rounded-2xl md:rounded-[2rem] border border-white/20 max-w-2xl mx-auto shadow-2xl mt-4">
            <div className="flex-1 flex items-center gap-3 px-4 w-full">
              <FaSearch className="text-yellow-400 text-sm" />
              <input
                type="text"
                placeholder="Search Colleges..."
                className="w-full py-2 md:py-3 bg-transparent outline-none text-white placeholder:text-white/60 text-sm font-semibold"
              />
            </div>
            <button className="w-full md:w-auto bg-[#890c25] text-white px-8 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-[#890c25] transition-all shadow-xl">
              Search Now
            </button>
          </div>

          {/* Stats - Hidden on extra small mobile to save space */}
          <div className="hidden sm:flex justify-center items-center gap-8 md:gap-16 pt-6">
            <div className="text-center">
              <h4 className="text-white text-xl md:text-3xl font-black italic">
                50+
              </h4>
              <p className="text-white/50 text-[8px] uppercase font-black tracking-widest mt-1">
                Colleges
              </p>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <div className="text-center">
              <h4 className="text-white text-xl md:text-3xl font-black italic">
                12K+
              </h4>
              <p className="text-white/50 text-[8px] uppercase font-black tracking-widest mt-1">
                Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
