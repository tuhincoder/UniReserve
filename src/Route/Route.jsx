import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Collages from "../pages/Collages/Collages";
import Admission from "../pages/Admission/Admission";
import MyCollage from "../pages/MyCollage/MyCollage";


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
                path: 'admission',
                element: <Admission />
            },
            {
                path: 'myCollage',
                element: <MyCollage />
            },

        ]

    }
])

export default router;