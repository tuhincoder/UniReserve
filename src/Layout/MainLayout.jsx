/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import navLogo from '../assets/images/navLogo.jpg'

const MainLayout = ({ children }) => {
    return (
        <div>

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-white w-full border-b-2 md:px-10 py-6">
                        <div className="flex-none lg:hidden">
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
                            className="w-12 h-12 rounded-3xl"
                            src={navLogo} alt="" />
                        <div className="mx-2 flex-1 px-1 text-xl font-medium">Unis <span className="text-[#B8001F] ">Reserve</span></div>
                        <div className="hidden flex-none lg:block">
                            <div className=" space-x-5 gap-5 text-xl">
                                {/* <NavLink to={'/home'}>Home</NavLink> */}
                                <NavLink to="/home" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Home</NavLink>
                                <NavLink to="/collage" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Collages</NavLink>
                                <NavLink to="/Admission" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Admission</NavLink>
                                <NavLink to="/myCollage" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>My Collage</NavLink>

                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>




    );
};

export default MainLayout;