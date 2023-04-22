import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Items from "./views/Items";


const router = createBrowserRouter ([
    {
        path : '/',
        element : <DefaultLayout /> ,
        children : [
            {
                path : '/dashboard',
                element : <Navigate to="/" />
            },
            {
                path : '/',
                element : <Dashboard />
            },
            {
                path : 'items',
                element : <Items />
            }
        ]
    },
    {
        path : '/',
        element : <GuestLayout /> ,
        children : [
            {
                path : 'signup',
                element : <Signup />
            },
            {
                path : 'login',
                element : <Login />
            }
        ]
    }

])

export default router;
