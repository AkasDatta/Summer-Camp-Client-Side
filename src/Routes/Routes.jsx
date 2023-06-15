import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import MyCart from "../pages/Dashboard/MyCart/MyCart";

import AdminRoute from "./AdminRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'instructor',
          element: <Instructor></Instructor>
        },
        {
          path: 'classes',
          element: <Classes></Classes>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'allclasses',
          element: <AdminRoute><AllClasses></AllClasses></AdminRoute>
        }
      ]
    }
  ]);

  export default router;