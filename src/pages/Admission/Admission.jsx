import { LuArrowUpRight } from "react-icons/lu";
import Container from "../../component/common/Container";
import useColleges from "../../hook/useColleges";
import { Link } from "react-router-dom";
import Loading from "../../component/common/Loading";
import {
  FaGraduationCap,
  FaFileSignature,
  FaUserCheck,
  FaAward,
} from "react-icons/fa";
import AdmissionHero from "./AdmissionHero";

const Admission = () => {
  const [colleges, isLoading] = useColleges();

  if (isLoading) {
    return <Loading />;
  }

  // Professional Steps Content
  const steps = [
    {
      id: 1,
      icon: <FaFileSignature />,
      title: "Online Application",
      desc: "Fill up the digital form with your academic & personal credentials.",
    },
    {
      id: 2,
      icon: <FaGraduationCap />,
      title: "Document Submission",
      desc: "Upload scanned copies of your transcripts and certificates.",
    },
    {
      id: 3,
      icon: <FaUserCheck />,
      title: "Review & Interview",
      desc: "Our committee reviews your profile for eligibility criteria.",
    },
    {
      id: 4,
      icon: <FaAward />,
      title: "Final Enrollment",
      desc: "Get your admission letter and start your journey with us.",
    },
  ];

  return (
    <section className="bg-[#fcfcfc] py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <AdmissionHero></AdmissionHero>
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="text-[#890c25] font-black tracking-[0.3em] text-[10px] uppercase bg-[#890c25]/5 px-4 py-2 rounded-full inline-block mb-4">
            Admission Portal 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">
            Fast-Track Your <span className="text-[#890c25]">Future.</span>
          </h1>
          <p className="text-gray-500 mt-6 text-sm md:text-base font-medium leading-relaxed">
            Navigate through our simplified admission process. Select your
            desired institution from the list and start your application journey
            today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Educational Roadmap */}
          <div className="lg:w-5/12 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100">
              <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight mb-8">
                How It Works
              </h2>

              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.id} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#890c25] text-xl group-hover:bg-[#890c25] group-hover:text-white transition-all duration-300 shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-800 text-sm uppercase tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-[#890c25] p-8 rounded-[2.5rem] text-white relative overflow-hidden group shadow-xl">
              <div className="relative z-10">
                <h3 className="font-black text-xl uppercase tracking-tighter italic">
                  Stuck Somewhere?
                </h3>
                <p className="text-white/70 text-sm mt-2 font-medium">
                  Our admission officers are ready to guide you 24/7.
                </p>
                <button className="mt-6 bg-white text-[#890c25] px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                  Contact Support
                </button>
              </div>
              <FaGraduationCap className="absolute -bottom-4 -right-4 text-9xl text-white/10 rotate-12" />
            </div>
          </div>

          {/* Right: Dynamic College Selector */}
          <div className="lg:w-7/12 w-full">
            <div className="flex items-center justify-between mb-8 px-2">
              <h2 className="text-xl font-black text-gray-800 uppercase tracking-widest">
                Available Colleges
              </h2>
              <span className="text-[10px] font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-400">
                {colleges.length} Institutions
              </span>
            </div>

            <div className="space-y-4 max-h-[700px] overflow-y-auto pr-4 custom-scrollbar">
              {colleges.map((college) => (
                <Link
                  key={college._id}
                  to={`/admissionForm/${college._id}`}
                  className="block group"
                >
                  <div className="p-6 md:p-8 flex items-center justify-between transition-all duration-500 bg-white rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:border-[#890c25]/20 group-hover:-translate-y-1">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-black text-gray-800 group-hover:text-[#890c25] transition-colors uppercase tracking-tighter">
                        {college.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">
                          Admission Open
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      </div>
                    </div>
                    <div className="bg-gray-50 group-hover:bg-[#890c25] p-4 rounded-2xl transition-all duration-500 group-hover:rotate-12">
                      <LuArrowUpRight className="text-2xl text-[#890c25] group-hover:text-white" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Admission;
