import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import Category from "./category/category";
import SignUp from "../components/form/signup";
import DelayLoader from "../common/loader/delayLoader/delayLoader";
import CategoriesDetailes from "../components/categories/categoriesDetailes";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: (
      <DelayLoader>
        <SignUp />
      </DelayLoader>
    ),
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: (
          <DelayLoader>
            <Home />
          </DelayLoader>
        ),
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path:"/categoryDetailes",
        element:<CategoriesDetailes />
      }
    ],
  },
]);

export default router;
