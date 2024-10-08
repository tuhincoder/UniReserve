import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub } from "react-icons/fa";
import SocialLogin from "../../SocialLogin/SocialLogin";
import GithubLogin from "../../SocialLogin/GithubLogin";

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

                            {/* <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                                
                            </button> */}
                            <input className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-400 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700" type="submit" value="Login" />
                        </form>

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
                        <GithubLogin />
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;