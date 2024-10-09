/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import navLogo from '../assets/images/navLogo.jpg'
import useAuth from "../hook/useAuth";
import Navbar from "../component/utils/Shared/Navbar/Navbar";
import profileImg from '../assets/images/profile.jpg'
import SidBar from "../component/utils/Shared/Navbar/SidBar";

const MainLayout = ({ children }) => {
    const { user, LogOutUser } = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log('logout');
        LogOutUser()
            .then(() => { })
            .catch(error => console.log(error.message))

    }

    const handleLogin = () => {
        navigate('/login')

    }

    return (
        <div>

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Navbar */}
                    <div className="navbar  bg-white w-full border-b-2 md:px-10 py-6 ">
                        <div className="flex-none lg:hidden ">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>

                        <img
                            className="w-12 h-12 rounded-3xl hidden lg:block"
                            src={navLogo} alt="" />
                        <Link to={'/'} className="mx-2 flex-1 px-1 text-xl font-medium">Unis <span className="text-[#B8001F] ">Reserve</span></Link>

                        <div className="hidden flex-none lg:block ">
                            <Navbar />
                        </div>
                        {/* dropdown */}
                        <div className="dropdown dropdown-end ml-10">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt=""
                                        src={user?.photoURL ? user?.photoURL : profileImg} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-slate-800 text-white text-xl rounded-box z-[1] mt-3 w-52 py-5 shadow">
                                <li>
                                    <p>{user?.displayName}</p>
                                </li>
                                {user ? <button onClick={handleLogout}>Logout</button> :
                                    <button onClick={handleLogin}>Login</button>}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <SidBar />
                    </ul>
                </div>
            </div>
        </div>




    );
};

export default MainLayout;