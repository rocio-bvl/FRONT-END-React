const API_URL = "http://localhost:3000/api/sport"

function getToken() {
    return localStorage.getItem("token")
}


export async function getSports() {
    const res = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    })
    const data = await res.json()
    return data.data
}

// crear deporte
export async function createSport(sport) {
    const response = await
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getToken()}`,
            },
            body: JSON.stringify(sport)
        })

    const data = await response.json()

    return data
}

// actualizar deporte
export async function updateSport(id, sport) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(sport) 
    })
    return res.json()
}

// eliminar deporte
export async function deleteSport(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    })
    return res.json()
}

// cambiar estado de deporte
export async function toggleSportStatus(id, status) {
    const res = await fetch(`${API_URL}/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ status })
    })
    return res.json()
}
