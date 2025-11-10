import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import Register from "../pages/Register";
import Login from "../pages/Login";








const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,

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
  }
]);




export default router;