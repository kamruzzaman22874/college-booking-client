import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../components/layouts/MainLayouts";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Home from "../components/Home/Home";
import CollegeDetails from "../components/CollegeDetails/CollegeDetails";
import SingleCollegeInfo from "../components/SingleCollegeInfo/SingleCollegeInfo";
import Addmission from "../components/Addmission/Addmission";
import AddmissionForm from "../components/AddmissionForm/AddmissionForm";
import PrivateRoute from "./PrivateRoute";
import MyCollege from "../components/MyCollege/MyCollege";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Profile from "../components/Profile/Profile";
import Update from "../components/Update/Update";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile",
                element: <Profile />,
                loader: () => fetch("https://college-booking-server-nine.vercel.app/addmissions")
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({ params }) => fetch(`https://college-booking-server-nine.vercel.app/update/${params.id}`)
            },
            {
                path: "/college",
                element: <SingleCollegeInfo />
            },
            {
                path: "/colleges/:id",
                element: <CollegeDetails />,
                loader: ({ params }) => fetch(`https://college-booking-server-nine.vercel.app/colleges/${params.id}`)
            },
            {
                path: "/addmission",
                element: <Addmission />
            },
            {
                path: "/addmission/:id",
                element: <AddmissionForm />
            },
            {
                path: "/myCollege",
                element: <PrivateRoute> <MyCollege /></PrivateRoute>,
                loader: () => fetch("https://college-booking-server-nine.vercel.app/addmissions")
            }
        ]
    },
]);
export default router;