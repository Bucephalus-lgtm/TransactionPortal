import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '.';


const ProtectedRoute = () => {
    const isAuth = isAuthenticated();
    return isAuth ? <Outlet /> : <Navigate to='/signin' />
}

export default ProtectedRoute;