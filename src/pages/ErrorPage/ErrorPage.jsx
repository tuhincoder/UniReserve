import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import errImg from "../../assets/login/error2.jpg";

const ErrorPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* Error Image with subtle animation */}
        <div className="relative group">
          <img
            className="w-full max-w-md mx-auto transform group-hover:scale-105 transition-transform duration-700"
            src={errImg}
            alt="404 Error"
          />
          {/* Shadow effect */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-black/5 blur-3xl rounded-full"></div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-[12rem] font-black text-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter italic">
            Lost in <span className="text-[#890c25]">Space?</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-md mx-auto text-sm md:text-base leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Let's
            get you back to the right path.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#890c25] text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-[#890c25]/30 hover:bg-black transition-all duration-500"
          >
            <FaHome /> Back To Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-900 border-2 border-gray-100 px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:border-[#890c25] transition-all"
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>

        {/* Footer Info */}
        <p className="pt-12 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
          Campus Pro Admission Portal • Error Code 404
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
