import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Collages from "../pages/Collages/Collages";
import Admission from "../pages/Admission/Admission";
import MyCollage from "../pages/MyCollage/MyCollage";
import CollegeCardDetails from "../pages/Home/CollageCard/CollegeCardDetails";
import ResearchMore from "../pages/Home/Research/ResearchMore";
import CollegesDetails from "../pages/Collages/CollegesDetails";
import AdmissionForm from "../pages/Admission/AdmissionForm";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRout from "./PrivetRout";
import ProfileRout from "../pages/ProfileRout/ProfileRout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'collage',
                element: <Collages />
            },
            {
                path: 'collages/:id',
                element: <PrivetRout><CollegesDetails /></PrivetRout>,
                loader: ({ params }) => fetch(`https://unireserve-server.vercel.app/allColleges/${params.id}`)

            },
            // college card details
            {
                path: '/clgDetails/:id',
                element: <CollegeCardDetails />,
                loader: ({ params }) => fetch(`https://unireserve-server.vercel.app/read-college/${params.id}`)
            },
            // research

            {
                path: 'researchMore/:id',
                element: <ResearchMore />,
                loader: ({ params }) => fetch(`https://unireserve-server.vercel.app/research/${params.id}`)
            },
            {
                path: 'admission',
                element: <Admission />
            },
            {
                path: 'admissionForm/:id',
                element: <AdmissionForm />,
                loader: ({ params }) => fetch(`https://unireserve-server.vercel.app/allColleges/${params.id}`)
            },
            // {
            //     path: '/quickAdmission',
            //     element: <AdmissionForm />,

            // },
            {
                path: 'myCollage',
                element: <PrivetRout>
                    <MyCollage />
                </PrivetRout>
            },
            {
                path: 'profile',
                element: <ProfileRout />
            },

        ]

    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
])

export default router;