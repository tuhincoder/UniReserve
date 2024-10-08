import { FaGithub } from "react-icons/fa";
import useAuth from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const GithubLogin = () => {
    const { user, githubLogin } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from?.pathname || '/';
    const handleGithub = () => {
        githubLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                toast.success('user github login successfully')
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message)
            })
    }


    return (
        <div>
            <button onClick={handleGithub} className="mb-2 flex h-10 w-full items-center justify-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                <FaGithub className="text-2xl mr-3" />
                SIGN IN WITH GITHUB
            </button>
        </div>
    );
};

export default GithubLogin;