import Container from "../../component/common/Container";
import faqImg from "../../assets/graduate/graduate1.jpg";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(0); // Prothomti default open thakbe

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const data = [
    {
      title: "What are the basic requirements for college admission?",
      description:
        "Admission requirements vary depending on the college, but most require a high school diploma or equivalent, transcripts, standardized test scores (like SAT or ACT), and letters of recommendation.",
    },
    {
      title: "When should I apply for college admission?",
      description:
        "It is best to start applying during your senior year of high school. Many colleges have application deadlines typically between November and January.",
    },
    {
      title: "How do I apply for financial aid for college?",
      description:
        "To apply for financial aid, you'll need to complete the FAFSA form. This will help determine your eligibility for grants, loans, and work-study programs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section with Decorative Element */}
          <div className="flex-1 w-full relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#890c25]/10 rounded-full -z-10 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-[12px] border-gray-50">
              <img
                className="w-full object-cover h-[400px] md:h-[500px] hover:scale-105 transition-transform duration-1000"
                src={faqImg}
                alt="FAQ Illustration"
              />
            </div>
            {/* Success Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
              <p className="text-[#890c25] font-black text-3xl">98%</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                Admission Rate
              </p>
            </div>
          </div>

          {/* FAQ Content Section */}
          <div className="flex-1 w-full">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-[#890c25] font-black tracking-[0.2em] text-xs uppercase bg-[#890c25]/5 px-4 py-2 rounded-full">
                Support Center
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-6 leading-tight uppercase tracking-tighter">
                Common <span className="text-[#890c25]">Queries</span>
              </h2>
            </div>

            <div className="space-y-4">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className={`border-b-2 transition-all duration-300 ${
                    isOpen === idx ? "border-[#890c25]" : "border-gray-100"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className="flex items-center justify-between w-full py-6 text-left group"
                  >
                    <h4
                      className={`text-lg md:text-xl font-bold transition-colors ${
                        isOpen === idx
                          ? "text-[#890c25]"
                          : "text-gray-700 group-hover:text-[#890c25]"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <span
                      className={`p-2 rounded-lg transition-all ${
                        isOpen === idx
                          ? "bg-[#890c25] text-white rotate-180"
                          : "bg-gray-50 text-gray-400"
                      }`}
                    >
                      {isOpen === idx ? <HiMinus /> : <HiPlus />}
                    </span>
                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen === idx
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium pr-10">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
