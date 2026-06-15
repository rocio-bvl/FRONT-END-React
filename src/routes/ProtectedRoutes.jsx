import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../services/authService"


function ProtectedRoute({ children }) {
    if (!isAuthenticated()) { // revisa si existe el token guardado
        return <Navigate to="/login" replace /> //< evita que el usuario vuelva con el botón atrás a la ruta bloqueada
    }       //  ^ redirige al login si el usuario no ha iniciado sesión
    
    return children // componente o layout que queremos proteger
}

export default ProtectedRoute