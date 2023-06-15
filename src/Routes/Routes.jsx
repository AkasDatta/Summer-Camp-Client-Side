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
import MyAddedClasses from "../pages/Dashboard/MyAddedClasses/MyAddedClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyEnrollClass from "../pages/Dashboard/MyEnrolledClass/MyEnrollClass";
import Payment from "../pages/Dashboard/Payment/Payment";



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
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/instructor',
          element: <Instructor></Instructor>
        },
        {
          path: '/classes',
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
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'allclasses',
          element: <AdminRoute><AllClasses></AllClasses></AdminRoute>
        },
        {
          path: 'myaddedclasses',
          element: <MyAddedClasses></MyAddedClasses>
        },
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: "myenrolledclass",
          element: <MyEnrollClass></MyEnrollClass>
        }
      ]
    }
  ]);

  export default router;