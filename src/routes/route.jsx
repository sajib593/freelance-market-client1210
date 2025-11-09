import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";








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
  }
]);




export default router;