import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import GuestLayout from "./components/GuestLayout";
import { Children } from "react";


const router = createBrowserRouter ([
    // {
    //     path : '/',
    //     element : <App />
    // },
    {
        path : '/',
        element : <Dashboard />
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
