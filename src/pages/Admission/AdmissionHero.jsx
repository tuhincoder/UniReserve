import { FaPlayCircle, FaUniversity, FaArrowRight } from "react-icons/fa";

const AdmissionHero = () => {
  return (
    <div className="bg-[#890c25] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden my-12 relative group shadow-2xl border border-white/5">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Side: Content */}
        <div className="flex-1 p-8 md:p-16 lg:p-20 text-white space-y-8 relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20">
            <FaUniversity className="text-yellow-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">
              Campus Tour 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            Your Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
              Starts Here
            </span>
          </h1>

          <p className="text-white/70 text-sm md:text-lg font-medium max-w-lg leading-relaxed">
            Explore our world-class campus and the vibrant student life that
            awaits you.
          </p>

          <div className="flex items-center gap-6 pt-6">
            <button className="bg-white text-[#890c25] px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-yellow-400 hover:text-black transition-all duration-500 shadow-2xl flex items-center gap-3 group/btn">
              Apply Today{" "}
              <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Video Player */}
        <div className="flex-1 w-full h-[350px] md:h-[550px] relative p-4 md:p-10 lg:pr-16">
          <div className="w-full h-full bg-black rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden relative border-[10px] border-white/10 shadow-2xl">
            {/* Shobar jonno kaj korbe emon direct embed link */}
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube-nocookie.com/embed/36m1o-tM05g?autoplay=0&rel=0"
              title="University Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Overlay Decor (Hover korle chole jabe) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#890c25]/40 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHero;
