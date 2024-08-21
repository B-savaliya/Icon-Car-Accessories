import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Category from "./category/category";
import SignUp from "../components/form/signup";

const router = createBrowserRouter([

    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/:category",
                element: <Category />
            }
        ],
    },
])

export default router