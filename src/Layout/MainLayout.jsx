/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";

const MainLayout = ({ children }) => {
    return (

        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
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
                    <div className="mx-2 flex-1 px-2">Navbar Title</div>
                    <div className="hidden flex-none lg:block">
                        <div className=" space-x-5 gap-5">
                            {/* <NavLink to={'/home'}>Home</NavLink> */}
                            <NavLink to="/home" className={({ isActive }) => isActive ? 'text-[#890c25]' : ''}>Home</NavLink>
                            <NavLink to="/collage" className={({ isActive }) => isActive ? 'text-[#890c25]' : ''}>Collages</NavLink>
                            <NavLink to="/Admission" className={({ isActive }) => isActive ? 'text-[#890c25]' : ''}>Admission</NavLink>
                            <NavLink to="/myCollage" className={({ isActive }) => isActive ? 'text-[#890c25]' : ''}>My Collage</NavLink>

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

    );
};

export default MainLayout;