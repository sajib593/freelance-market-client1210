import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";


const PrivateRoute = ({children}) => {

     let {user, loading} = use(AuthContext);

    let location =useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;