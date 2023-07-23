import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Home from "../components/Home/Home";
import CollegeSection from "../components/CollegeSection/CollegeSection";
import CollegeDetails from "../components/CollegeDetails/CollegeDetails";
import SingleCollegeInfo from "../components/SingleCollegeInfo/SingleCollegeInfo";
import Addmission from "../components/Addmission/Addmission";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path:"/register",
                element: <Register/>
            },
            {
                path: "/college",
                element: <SingleCollegeInfo/>
            },
            {
                path: "/colleges/:id",
                element: <CollegeDetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)
            },
            {
                path: "/addmission",
                element: <Addmission/>
            }
        ]
    },
]);
export default router;