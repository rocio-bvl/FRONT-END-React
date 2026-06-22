import { useState, useEffect } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import Swal from "sweetalert2"
import { createSport, updateSport } from "../services/sportService"


const initialForm = {
    name: "",
    objective: "",
    duration: Number,
    status: true,
}


function SportFormModal({ show, handleClose, handleSave, sport, refresh }) {
    const [formData, setFormData] = useState(initialForm)

    useEffect(() => {
        if (sport) {
            setFormData({
                name: sport.name || "",
                objective: sport.objective || "",
                duration: sport.duration || Number(formData.duration),
                status: sport.status || true,
            })
        } else {
            setFormData(initialForm)
        }
    }, [sport, show])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()

        if (
            formData.name.length < 3 ||
            formData.objective.length < 5 ||
            Number(formData.duration) <= 0
        ) {
            Swal.fire(
                "Error",
                "Debes ingresar datos válidos (nombre mínimo 3 caracteres, objetivo mínimo 5 y duración mayor a 0)",
                "error"
            );
            return
        }

        const dataToSend = {
            name: formData.name,
            objective: formData.objective,
            duration: Number(formData.duration),
            status: formData.status ?? true,
        };

        try {
            if (sport) {
                await updateSport(sport.id, dataToSend)
                Swal.fire("Actualizado", "Deporte actualizado", "success")
            } else {
                await createSport(dataToSend)
                Swal.fire("Creado", "Deporte creado", "success")
            }

            await refresh()
            handleClose()

        } catch (error) {
            console.error(error)
            Swal.fire("Error", "No se pudo guardar", "error")
        }
    }

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {sport ? "Editar" : "Crear"} Deporte
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={onSubmit}>
                <Modal.Body>

                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ingrese nombre del deporte"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Objetivo</Form.Label>
                        <Form.Control
                            name="objective"
                            value={formData.objective}
                            onChange={handleChange}
                            placeholder="Ingrese objetivo"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Duración</Form.Label>
                        <Form.Control
                            name="duration"
                            type="number"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="Duración en minutos"
                        />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="submit">Guardar</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default SportFormModal