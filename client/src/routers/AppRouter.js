
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                    
                    } 
                />



                {/* <Route path='/*' element= { <DashboardRoutes/> } /> */}

                <Route path='/*' element= {
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                    } 
                />

            </Routes>
        </BrowserRouter>
    )
};
