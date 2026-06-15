const API_URL = "http://localhost:3000/api/auth"


// Login contra el backend
export async function loginUser(credentials) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })

    let data

    try {
        data = await response.json()
    } catch {
        throw new Error("El servidor no respondió correctamente")
    }

    if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesion")
    }

    return data
}

// Guardar sesion en el navegador
export function saveSession(token, user) {
    localStorage.setItem("token", token)
    localStorage.setItem("user", JSON.stringify(user))
}

// Obtener token
export function getToken() {
    return localStorage.getItem("token")
}

// Obtener usuario
export function getUser() {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
}

// Verificar si existe sesion
export function isAuthenticated() {
    return !!getToken()
}

// Cerrar sesión 
export function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}