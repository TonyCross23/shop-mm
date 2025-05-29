import { createBrowserRouter } from "react-router";
import Layout from "../layouts";
import Home from "../pages/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shopping",
                element: <div className="text-3xl flex items-center justify-center mt-48 dark:text-white">Coming soon....</div>
            }
        ],
    }
],
 {
    basename: '/shop-mm',
  })