import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import { FaEnvelope, FaFacebook, FaGithub, FaLock } from "react-icons/fa";
import SocialLogin from "../../SocialLogin/SocialLogin";
import GithubLogin from "../../SocialLogin/GithubLogin";

const Login = () => {
  const { user, loginUser } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    const toastId = toast.loading("login...");
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("login successfully", { id: toastId });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#fcfcfc] px-4 py-10">
      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* --- Left Side: Sign In Form --- */}
          <div className="w-full md:w-1/2 p-10 md:p-14 bg-white">
            <div className="mb-10">
              <span className="text-[#890c25] font-black tracking-widest text-[10px] uppercase bg-[#890c25]/5 px-3 py-1 rounded-md">
                Welcome Back
              </span>
              <h2 className="mt-4 text-4xl font-black text-gray-900 tracking-tighter uppercase italic">
                Sign <span className="text-[#890c25]">In.</span>
              </h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="relative group">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#890c25] transition-colors" />
                <input
                  name="email"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#890c25] focus:bg-white transition-all font-medium text-sm"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>

              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#890c25] transition-colors" />
                <input
                  name="password"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#890c25] focus:bg-white transition-all font-medium text-sm"
                  placeholder="Password"
                  type="password"
                  required
                />
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-[10px] font-black uppercase text-gray-400 hover:text-[#890c25] transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#890c25] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-xl shadow-[#890c25]/20 hover:bg-black transition-all duration-500"
              >
                Login
              </button>
            </form>
          </div>

          {/* --- Right Side: Registration & Social --- */}
          <div className="w-full md:w-1/2 bg-gray-50 p-10 md:p-14 flex flex-col justify-center border-l border-gray-100">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                New Here?
              </h3>
              <p className="mt-3 text-gray-500 text-sm font-medium leading-relaxed">
                Create an account to start your journey with us and access all
                premium features.
              </p>

              <Link to="/register" className="block mt-6">
                <button className="w-full bg-white text-gray-900 border-2 border-gray-200 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:border-[#890c25] hover:text-[#890c25] transition-all">
                  Create Account
                </button>
              </Link>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200"></span>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                  <span className="bg-gray-50 px-4 text-gray-400">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {/* GithubLogin and SocialLogin custom styling apply koro */}
                <GithubLogin />
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
