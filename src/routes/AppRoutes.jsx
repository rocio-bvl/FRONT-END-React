import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Unauthorized from "../pages/Unauthorized"

import UserDashboard from "../pages/user/UserDashboard"
import CoachDashboard from "../pages/coach/CoachDashboard"
import AdminDashboard from "../pages/admin/AdminDashboard"

import UserLayout from "../layouts/UserLayout"
import CoachLayout from "../layouts/CoachLayout"
import AdminLayout from "../layouts/AdminLayout"

import ProtectedRoute from "./ProtectedRoutes" // se usa cuando cualquier usuario loggeado puede acceder
import RoleRoute from "./RoleRoute" // se usa cuadno además de estar loggeado se debe validar un rol


function AppRoutes() {
    return (
        // contenedor principal, permite que React Router funcione. envuelve todas las rutas de la app
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                
                <Route path="/user" element={<RoleRoute allowedRoles={["user"]}><UserLayout /></RoleRoute>}>
                    <Route path="dashboard" element={<UserDashboard />} />
                </Route>
                
                <Route path="/coach" element={<RoleRoute allowedRoles={["coach"]}><CoachLayout /></RoleRoute>}>
                    <Route path="dashboard" element={<CoachDashboard />} />
                </Route>
                
                <Route path="/admin" element={<RoleRoute allowedRoles={["admin"]}><AdminLayout /></RoleRoute>}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                </Route>
                
                <Route path="/perfil" element={<ProtectedRoute><h1>Perfil del usuario autenticado</h1></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
        // Routes: agrupa las rutas del sistema, dentro se declara cada Route de la app
        // Route: indica qué componente debe mostrarse cuando el usuario entra a una URL específica
    )
}

export default AppRoutes
