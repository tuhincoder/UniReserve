/* eslint-disable react/prop-types */
import {
  FaUserAlt,
  FaEnvelope,
  FaBook,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const FormCart = ({ item }) => {
  const { name, college_name, subject, address, email, image } = item || {};

  return (
    <div className="max-w-4xl mx-auto my-8 group">
      <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row items-center">
        {/* Left Side: Candidate Image */}
        <div className="w-full lg:w-2/5 h-64 lg:h-80 overflow-hidden relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute top-4 left-4 bg-[#890c25] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            Applied Student
          </div>
        </div>

        {/* Right Side: Details Content */}
        <div className="w-full lg:w-3/5 p-8 lg:p-10 space-y-5">
          <div>
            <h4 className="text-[#890c25] text-xs font-black uppercase tracking-[0.3em] mb-1">
              Institution
            </h4>
            <h2 className="text-2xl md:text-3xl font-black text-gray-800 uppercase tracking-tighter">
              {college_name || "College Name"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 border-y border-gray-50 py-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#890c25]">
                <FaUserAlt className="text-xs" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Applicant
                </p>
                <p className="text-sm font-bold text-gray-700">{name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#890c25]">
                <FaBook className="text-xs" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Subject
                </p>
                <p className="text-sm font-bold text-gray-700">{subject}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#890c25]">
                <FaEnvelope className="text-xs" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Email
                </p>
                <p className="text-sm font-bold text-gray-700 truncate max-w-[150px]">
                  {email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#890c25]">
                <FaMapMarkerAlt className="text-xs" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Location
                </p>
                <p className="text-sm font-bold text-gray-700">{address}</p>
              </div>
            </div>
          </div>

          {/* Action Button: Review */}
          <div className="pt-2">
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#890c25] hover:bg-black text-white px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#890c25]/10 group/btn">
              <FaStar className="group-hover/btn:rotate-[120deg] transition-transform duration-500" />
              Give Feedback & Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCart;
