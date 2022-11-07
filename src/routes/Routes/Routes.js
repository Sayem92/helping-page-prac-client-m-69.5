import { createBrowserRouter } from "react-router-dom";
import AddEvent from "../../components/Events/AddEvent";
import Login from "../../components/form/Login";
import Register from "../../components/form/Register";
import Home from "../../components/Home/Home/Home";
import RegisterList from "../../components/registerList/RegisterList";
import ShowEvent from "../../components/ShowEvents/ShowEvent";

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
    {
        path: '/registerList',
        element: <RegisterList></RegisterList>
    },
    {
        path: "/addEvent",
        element: <AddEvent></AddEvent>
    },
    {
        path: "/showEvent",
        element: <ShowEvent></ShowEvent>
    }
])