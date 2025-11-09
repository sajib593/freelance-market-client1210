import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import HomeLayout from "../layout/HomeLayout";








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
]);




export default router;