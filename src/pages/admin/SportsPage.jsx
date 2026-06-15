import { useEffect, useState } from "react"
import { Table, Button, Form } from "react-bootstrap"
import Swal from "sweetalert2"
import {
    getSports,
    deleteSport,
    toggleSportStatus,
} from "../../services/sportService"

import SportFormModal from "../../components/SportFormModal"

function SportsPage() {
    const [sports, setSports] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedSport, setSelectedSport] = useState(null)

    // get
    const loadSports = async () => {
        const data = await getSports()
        console.log("datos:", data)
        setSports([...data])
    }


    useEffect(() => {
        loadSports()
    }, [])

    // eliminar (sweetalert2)
    const handleDelete = (id) => {
        Swal.fire({
            title: "¿Eliminar deporte?",
            icon: "warning",
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteSport(id);
                Swal.fire("Eliminado", "", "success")

                loadSports()
            }
        })
    }

    // switch
    const handleToggle = async (sport) => {
        await toggleSportStatus(sport.id, !sport.status)
        loadSports() // actualización inmediata
    }

    // formatear fecha
    const formatDate = (date) => {
        const newDate = new Date(date)
        const options = {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }

        return newDate.toLocaleDateString("es-ES", options)
    }

    return (
        <>
            <h2>Gestión de Deportes</h2>

            <Button onClick={loadSports} className="mb-3">
                Refrescar
            </Button>

            <Button
                className="mb-3 ms-2"
                onClick={() => {
                    setSelectedSport(null);
                    setShowModal(true);
                }}
            >
                Crear
            </Button>

            <Table bordered>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Objetivo</th>
                        <th>Duración</th>
                        <th>Estado</th>
                        <th>Fecha de creación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {sports.map((sport) => (
                        <tr key={sport.id}>
                            <td>{sport.name}</td>
                            <td>{sport.objective}</td>
                            <td>{sport.duration} min</td>
                            <td>{formatDate(sport.created_at)}</td>

                            <td>
                                <section>
                                    <Form.Check
                                        type="switch"
                                        checked={sport.status}
                                        onChange={() => handleToggle(sport)}
                                    />
                                    <span className="ms-2">
                                        {sport.status ? "Activo" : "Inactivo"}
                                    </span>
                                </section>
                            </td>

                            <td>
                                <Button
                                    size="sm"
                                    onClick={() => {
                                        setSelectedSport(sport)
                                        setShowModal(true);
                                    }}
                                >
                                    Editar
                                </Button>

                                <Button
                                    size="sm"
                                    variant="danger"
                                    onClick={() => handleDelete(sport.id)}
                                    className="ms-2"
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <SportFormModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                sport={selectedSport}
                refresh={loadSports}
            />
        </>
    )
}

export default SportsPage