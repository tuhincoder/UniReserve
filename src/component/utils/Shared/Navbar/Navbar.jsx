import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hook/useAuth";


const Navbar = () => {
    const { user } = useAuth()
    return (
        <div className=" space-x-5 gap-5 text-xl">
            {/* <NavLink to={'/home'}>Home</NavLink> */}
            <NavLink to="/home" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Home</NavLink>
            <NavLink to="/collage" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Collages</NavLink>
            <NavLink to="/Admission" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Admission</NavLink>
            <NavLink to="/myCollage" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>My Collage</NavLink>
            {user?.email ?
                <Link className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Logout</Link> :
                <Link to="/login" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Login</Link>
            }

        </div>
    );
};

export default Navbar;