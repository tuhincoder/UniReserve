
<div className="drawer">
    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">

            <div className=" w-full px-16 text-xl">
                {/* <img className="w-12 h-12 rounded-2xl" src={navLogo} alt="" /> */}
                {/* <div className="mx-2 flex-1 px-2">UniReserve</div> */}
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