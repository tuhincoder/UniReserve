/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";


const PrivetRout = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()


    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivetRout;