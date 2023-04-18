import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";


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
        path : '/signup',
        element : <Signup />
    },
    {
        path : '/login',
        element : <Login />
    }
])

export default router;
