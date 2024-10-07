import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
    const { user, loginUser } = useAuth()



    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const toastId = toast.loading('login...')
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('login successfully', { id: toastId })
            })
            .catch(err => {
                console.log(err);
            })

    }




    return (
        <div>
            <div className="max-w-3xl mx-auto mt-20 bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900">
                <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
                    <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
                        {/* Left side form */}
                        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Sign In</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4 flex flex-col space-y-4">
                                <input name="email" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1" placeholder="Username" type="text" />
                                <input name="password" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1" placeholder="Password" type="password" />
                            </div>
                            <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                                <input type="checkbox" id="keep_signed_in" />
                                <label className="select-none text-sm font-medium" htmlFor="keep_signed_in">
                                    Keep me signed in
                                </label>
                            </div>
                            {/* <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                                
                            </button> */}
                            <input className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-400 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700" type="submit" value="Login" />
                        </form>
                        <p className="mt-6 flex gap-1 text-sm">
                            Did you
                            <a className="text-sky-500 underline" href="#">
                                forget your password?
                            </a>
                        </p>
                    </div>
                    {/* Right side content */}
                    <div className="w-full sm:w-1/2">
                        <p className="mb-6 text-sm">If you don&apos;t already have an account click the button below to create your account.</p>
                        <Link to={'/register'}>
                            <button className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                                Create Account
                            </button>
                        </Link>
                        <p className="my-4 text-center">OR</p>
                        <button className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6 text-white"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                            SIGN IN WITH FACEBOOK
                        </button>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;