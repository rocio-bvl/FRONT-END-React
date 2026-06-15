import { Navigate } from "react-router-dom"
import { getUser, isAuthenticated } from "../services/authService"

//                            lista de roles permitidos
function RoleRoute({ children, allowedRoles }) {
    if (!isAuthenticated()) { // revisa si existe el token guardado
        return <Navigate to="/login" replace /> //< evita que el usuario vuelva con el botón atrás a la ruta bloqueada
    }       //  ^ redirige al login si el usuario no ha iniciado sesión
    
    const user = getUser()

    // si el rol del usuario no está permitido, redirige a Unauthorized
    if (!user || !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />
    }
    
    return children // componente o layout que queremos proteger
}
export default RoleRoute
