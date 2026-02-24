import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the admission process take?",
      answer:
        "Typically, it takes 7-10 working days to process your application once all documents are submitted.",
    },
    {
      question: "What documents are required for enrollment?",
      answer:
        "You will need your previous academic transcripts, national ID/Birth certificate, and recent passport-size photos.",
    },
    {
      question: "Is there any scholarship facility available?",
      answer:
        "Yes, we offer merit-based scholarships up to 50% for students with outstanding academic records.",
    },
    {
      question: "Can I change my preferred college after applying?",
      answer:
        "You can request a change within 48 hours of your initial application through our support desk.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#890c25] mb-4">
            <FaQuestionCircle className="text-xl" />
            <span className="font-black text-[10px] uppercase tracking-[0.3em]">
              Common Queries
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic">
            Frequently Asked <span className="text-[#890c25]">Questions</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                activeIndex === index
                  ? "border-[#890c25] bg-[#890c25]/5 shadow-xl shadow-[#890c25]/5"
                  : "border-gray-100 bg-gray-50"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
              >
                <span
                  className={`font-bold text-sm md:text-base uppercase tracking-tight transition-colors ${
                    activeIndex === index ? "text-[#890c25]" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    activeIndex === index
                      ? "bg-[#890c25] text-white rotate-180"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {activeIndex === index ? (
                    <FaMinus size={12} />
                  ) : (
                    <FaPlus size={12} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-gray-500 text-sm font-medium leading-relaxed border-t border-[#890c25]/10 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Support Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            Still have questions?{" "}
            <a
              href="#"
              className="text-[#890c25] border-b border-[#890c25] pb-0.5 ml-1"
            >
              Live Chat with us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
