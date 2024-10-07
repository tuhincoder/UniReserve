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


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'collage',
                element: <Collages />
            },
            {
                path: 'collages/:id',
                element: <CollegesDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/allColleges/${params.id}`)

            },
            // college card details
            {
                path: '/clgDetails/:id',
                element: <CollegeCardDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/read-college/${params.id}`)
            },
            // research

            {
                path: 'researchMore/:id',
                element: <ResearchMore />,
                loader: ({ params }) => fetch(`http://localhost:5000/research/${params.id}`)
            },
            {
                path: 'admission',
                element: <Admission />
            },
            {
                path: 'admissionForm/:id',
                element: <AdmissionForm />,
                loader: ({ params }) => fetch(`http://localhost:5000/allColleges/${params.id}`)
            },
            {
                path: 'myCollage',
                element: <MyCollage />
            },

        ]

    }
])

export default router;