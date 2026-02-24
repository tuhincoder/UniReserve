import {
  FaLaptopCode,
  FaBus,
  FaWifi,
  FaBookReader,
  FaHeartbeat,
} from "react-icons/fa";

const StudentPerks = () => {
  const perks = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Tech Access",
      desc: "Free access to labs & premium software licenses.",
    },
    {
      id: 2,
      icon: <FaBus />,
      title: "Transport",
      desc: "City-wide shuttle service for all enrolled students.",
    },
    {
      id: 3,
      icon: <FaWifi />,
      title: "High-Speed Wi-Fi",
      desc: "24/7 high-speed internet across the entire campus.",
    },
    {
      id: 4,
      icon: <FaBookReader />,
      title: "Digital Library",
      desc: "Unlimited access to 50k+ e-books and journals.",
    },
    {
      id: 5,
      icon: <FaHeartbeat />,
      title: "Health Care",
      desc: "Free medical checkups & insurance for students.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50/50 rounded-[3rem] my-10 border border-dashed border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-[#890c25] font-black tracking-widest text-[10px] uppercase bg-[#890c25]/5 px-3 py-1 rounded-md">
              Member Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">
              Your Student <span className="text-[#890c25]">Privileges</span>
            </h2>
          </div>
          <p className="text-gray-400 font-medium text-sm max-w-xs md:text-right">
            As an enrolled student, you are entitled to these premium campus
            facilities.
          </p>
        </div>

        {/* Horizontal Scroll or Grid for Perks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {perks.map((perk) => (
            <div
              key={perk.id}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl text-gray-400 group-hover:bg-[#890c25] group-hover:text-white transition-all duration-500 mb-6">
                {perk.icon}
              </div>
              <h4 className="font-black text-gray-800 uppercase text-xs tracking-widest mb-3">
                {perk.title}
              </h4>
              <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action Mini Banner */}
        <div className="mt-12 bg-[#890c25] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">
              Need help with your <br /> Student Identity Card?
            </h3>
          </div>
          <button className="relative z-10 bg-white text-[#890c25] px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-yellow-400 hover:text-black transition-all shadow-2xl">
            Contact Registrar
          </button>
          {/* Decorative Circles */}
          <div className="absolute top-[-50%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default StudentPerks;
