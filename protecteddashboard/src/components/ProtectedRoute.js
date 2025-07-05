import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const username = localStorage.getItem('user');
    return username ? children : <Navigate to={'/'}/>
};

export default ProtectedRoute;