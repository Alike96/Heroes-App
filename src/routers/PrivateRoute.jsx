import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth/authContext';

const PrivateRoute = ({children}) => {
  
    const {user} = useContext(AuthContext)

    const {pathname, search} = useLocation()
    console.log(pathname + search);

    localStorage.setItem('lastPath',pathname + search)

    return user.logged
    ? children
    : <Navigate to={'/login'}/>

}

export default PrivateRoute;
