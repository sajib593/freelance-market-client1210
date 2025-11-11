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
    element: <AddJob></AddJob>
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
    element: <ViewDetails></ViewDetails>
  },
  {
    path: '/jobsUpdate',
    element: <JobsUpdate></JobsUpdate>
  },
  {
    path: '/updateData/:id',
    element: <UpdateData></UpdateData>
  }
 
]);




export default router;