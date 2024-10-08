import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hook/useAuth";


const Navbar = () => {
    const { user, LogOutUser } = useAuth()

    const handleLogOut = () => {
        LogOutUser()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className=" space-x-5 gap-5 text-xl">
            {/* <NavLink to={'/home'}>Home</NavLink> */}
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Home</NavLink>
            <NavLink to="/collage" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Collages</NavLink>
            <NavLink to="/Admission" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>Admission</NavLink>
            <NavLink to="/myCollage" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>My Collage</NavLink>
            {user ?
                <Link className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>
                    <button onClick={handleLogOut}>Logout</button>
                </Link> :
                <Link to="/login" className={({ isActive }) => isActive ? 'text-[#890c25] underline underline-offset-2' : ''}>
                    Login
                </Link>
            }

        </div>
    );
};

export default Navbar;