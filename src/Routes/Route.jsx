import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Details from "../Pages/Details";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/details/:id',
        element: <Details />
    }
])

export default Route;