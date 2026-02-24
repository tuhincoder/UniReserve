import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import ContactFAQ from "./ContactFAQ";

const ContactPage = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#890c25] font-black tracking-[0.3em] text-[10px] uppercase bg-[#890c25]/5 px-4 py-2 rounded-full inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase">
            How can we <span className="text-[#890c25]">Help?</span>
          </h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Have questions about admissions or campus life? Our team is here to
            support your journey 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 bg-[#890c25] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-12">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tight italic">
                  Contact Info
                </h2>
                <p className="text-white/70 mt-4 font-medium text-sm leading-relaxed">
                  Reach out to us directly through any of these channels. We
                  usually respond within 2 hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#890c25] transition-all">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                      Call Us
                    </p>
                    <p className="font-bold">+880 1234 567 890</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#890c25] transition-all">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                      Email Us
                    </p>
                    <p className="font-bold">admissions@university.edu</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#890c25] transition-all">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50">
                      Location
                    </p>
                    <p className="font-bold">123 Academic Plaza, Dhaka</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 flex gap-4">
                {[<FaFacebookF />, <FaTwitter />, <FaLinkedinIn />].map(
                  (icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-[#890c25] transition-all"
                    >
                      {icon}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Abstract Background Decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 p-10 md:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#890c25] focus:bg-white transition-all font-medium text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#890c25] focus:bg-white transition-all font-medium text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Admission Inquiry"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#890c25] focus:bg-white transition-all font-medium text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#890c25] focus:bg-white transition-all font-medium text-gray-700 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#890c25] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-[#890c25]/30 hover:bg-black transition-all duration-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <ContactFAQ />
    </div>
  );
};

export default ContactPage;
