import {useContext} from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/authContext';


export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext);

  return !user.logged
    ? children
    : <Navigate to="/equipos-rotativos" />
}
