import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GithubLogin from "../../SocialLogin/GithubLogin";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Register = () => {
    const { createUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        const toastId = toast.loading('Registering...')
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Register successfully', { id: toastId })
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }



    return (
        <div>
            <div className="max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900 mx-auto mt-20">
                <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
                    <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
                        {/* Left side form */}
                        <h2 className="mb-6 text-3xl font-semibold tracking-tight">Register</h2>
                        <form onSubmit={handleRegister}>
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
                            {/* <input className="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-600 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                                Submit
                            </input> */}
                            <input className="border w-full py-2 bg-slate-200" type="submit" value="Register" />
                        </form>

                    </div>
                    {/* Right side content */}
                    <div className="w-full sm:w-1/2">
                        <p className="mb-6 text-sm">If you  already have an account click the button below to login now.</p>
                        <Link to={'/login'}>
                            <button className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                                Login now
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

export default Register;