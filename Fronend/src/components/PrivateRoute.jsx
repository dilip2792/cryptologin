import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
const PrivateRoute = ({children}) => {
    const [authUser]   = useAuth();

    // Redirect to SignIn if not authenticated
    return authUser ? children : <Navigate to="/signin" />;
};

export default PrivateRoute