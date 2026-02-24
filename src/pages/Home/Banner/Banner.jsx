import banner1 from "../../../assets/banner/banner.jpg";
import banner2 from "../../../assets/banner/banner1.jpg";
import banner3 from "../../../assets/banner/banner2.jpg";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
  return (
    /* z-0 bebohar kora hoyeche jate Navbar (z-1000) er niche thake */
    <div className="relative group z-0 overflow-hidden">
      {/* Carousel Container */}
      <div className="carousel w-full h-[450px] md:h-[550px] lg:h-[750px]">
        {[banner3, banner2, banner1].map((img, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className="carousel-item relative w-full"
          >
            {/* Image Overlay - Darker gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>

            <img
              src={img}
              className="w-full object-cover"
              alt="College Banner"
            />

            {/* Banner Content - Lower Z-index than Navbar */}
            <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 text-white">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  Find Your Dream <br />
                  <span className="text-[#ff3d5d]">College</span> Today
                </h1>
                <p className="mt-6 text-sm md:text-xl text-gray-200 max-w-xl hidden sm:block leading-relaxed">
                  Explore thousands of top-rated colleges, simplify your
                  admission process, and build your future career with us.
                </p>

                {/* Modern Search Bar */}
                <div className="mt-10 w-full max-w-2xl relative group/search">
                  <div className="absolute inset-0 bg-[#890c25]/20 blur-xl rounded-full opacity-0 group-hover/search:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Search for colleges, courses or locations..."
                      className="w-full py-4 md:py-5 pl-14 pr-32 rounded-2xl text-gray-800 focus:outline-none bg-white shadow-2xl text-lg"
                    />
                    <AiOutlineSearch className="absolute left-5 text-2xl text-gray-400" />
                    <button className="absolute right-2 bg-[#890c25] hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95">
                      Find
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {[1, 2, 3].map((num) => (
          <a
            key={num}
            href={`#item${num}`}
            className="w-3 h-3 md:w-4 md:h-1.5 rounded-full bg-white/30 hover:bg-[#890c25] hover:w-8 transition-all duration-300"
          ></a>
        ))}
      </div>

      {/* Side Navigation - Hidden on small devices */}
      <div className="absolute top-1/2 -translate-y-1/2 left-5 right-5 z-30 hidden lg:flex justify-between pointer-events-none">
        <a
          href="#item1"
          className="p-4 rounded-2xl bg-black/20 backdrop-blur-md text-white hover:bg-[#890c25] transition-all pointer-events-auto border border-white/10"
        >
          ❮
        </a>
        <a
          href="#item3"
          className="p-4 rounded-2xl bg-black/20 backdrop-blur-md text-white hover:bg-[#890c25] transition-all pointer-events-auto border border-white/10"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Banner;
