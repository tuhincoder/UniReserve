/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import Loading from "../component/common/Loading";


const PrivetRout = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()


    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivetRout;