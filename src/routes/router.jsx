import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ViewDetails from "../pages/ViewDetails";
import JobsUpdate from "../pages/JobsUpdate";
import UpdateData from "../pages/UpdateData";
import ErrorPage from "../pages/ErrorPage";
import AcceptedTask from "../pages/AcceptedTask";
import PrivateRoute from "../Provider/PrivateRoute";










const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },

  {
    path: '/allJobs',
    element: <AllJobs></AllJobs>
  },
  
  {
    path: "/addJobs",
    element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
  },

  {
    path: "/register",
    element: <Register></Register>
  },

  {
    path: "/login",
    element: <Login></Login>
  },

  {
    path: '/viewDetails/:id',
    element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
  },
  {
    path: '/jobsUpdate',
    element: <PrivateRoute><JobsUpdate></JobsUpdate></PrivateRoute>
  },
  {
    path: '/updateData/:id',
    element: <PrivateRoute><UpdateData></UpdateData></PrivateRoute>
  },

  {
    path: '/acceptedTasks',
    element: <PrivateRoute><AcceptedTask></AcceptedTask></PrivateRoute>
  }
 
]);




export default router;