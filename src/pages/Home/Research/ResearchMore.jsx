import { useLoaderData } from "react-router-dom";
import Container from "../../../component/common/Container";
import {
  FaMicroscope,
  FaGlobeAmericas,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";

const ResearchMore = () => {
  const getData = useLoaderData();

  return (
    <div className="bg-[#fcfcfc] pb-20">
      {/* Header Section */}
      <div className="bg-[#890c25] py-20 mb-16">
        <Container>
          <div className="text-center space-y-4">
            <span className="text-white/60 font-black tracking-[0.4em] text-[10px] uppercase">
              Innovation & Discovery
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              The Research <span className="text-yellow-400">Enterprise.</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Main Research Articles */}
        <div className="space-y-24">
          {getData?.research?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 lg:gap-20 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Side */}
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-[#890c25]/5 rounded-[3rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="relative h-[400px] w-full object-cover rounded-[2.5rem] shadow-2xl transition-all duration-700 grayscale-[0.5] group-hover:grayscale-0"
                />
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 text-[#890c25]">
                  <FaMicroscope />
                  <span className="font-black text-[10px] uppercase tracking-widest">
                    Case Study {index + 1}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                  {item.title}
                </h1>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                  {item.summary} Social networks significantly impact society by
                  enhancing communication and fostering community connections.
                  They allow individuals to maintain relationships over long
                  distances and facilitate sharing resources.
                </p>
                <button className="text-[#890c25] font-black uppercase text-xs tracking-widest border-b-2 border-[#890c25] pb-1 hover:text-black hover:border-black transition-all">
                  Read Full Paper
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- New Feature 1: Research Impact Stats --- */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaGlobeAmericas />,
              count: "40+",
              label: "Global Partners",
            },
            { icon: <FaAward />, count: "150+", label: "Awards Won" },
            { icon: <FaBookOpen />, count: "500+", label: "Publications" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 text-center shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="text-3xl text-gray-300 group-hover:text-[#890c25] transition-colors flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-gray-900 italic">
                {stat.count}
              </h3>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* --- New Feature 2: Call to Collaboration --- */}
        <div className="mt-20 bg-black rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
              Want to publish your <br />{" "}
              <span className="text-[#890c25]">Research</span> with us?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-medium">
              Join our community of world-class researchers. We provide the
              platform and resources to bring your discovery to the world.
            </p>
            <button className="bg-[#890c25] text-white px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Submit Manuscript
            </button>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#890c25]/20 blur-[100px] rounded-full"></div>
        </div>
      </Container>
    </div>
  );
};

export default ResearchMore;
