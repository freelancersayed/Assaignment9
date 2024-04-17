import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname);
    
    // if(loader){
    //     return <div className="min-h-screen text-9xl items-center justify-center flex"><span className="loading loading-spinner loading-lg"></span></div>
    //   }


    if(user){
       return children
    }
    else{
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }




 
};

export default PrivateRouter;