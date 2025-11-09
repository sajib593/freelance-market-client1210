import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import HomeLayout from "../layout/HomeLayout";
import AllJobs from "../pages/AllJobs";








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
  }
]);




export default router;