import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/form/Login";
import Register from "../../components/form/Register";
import Home from "../../components/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
])