import { FaFacebook, FaGoogle } from "react-icons/fa";
import useAuth from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white">
                <FaGoogle className="text-2xl mr-2" />
                SIGN IN WITH GOOGLE
            </button>
        </div>
    );
};

export default SocialLogin;