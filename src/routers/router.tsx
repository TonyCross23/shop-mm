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
            }
        ]
    }
])