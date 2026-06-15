import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"


const initialForm = {
    full_name: "",
    email: "",
    role: "user",
    password: "",
}

// show controla si el modal está visible. handleClose cierra el modal.
// handleSave envía los datos al componente padre. selectedUser permite saber si se está creando o editando.
function UserFormModal({ show, handleClose, handleSave, selectedUser }) {
    const [formData, setFormData] = useState(initialForm)
    const [errors, setErrors] = useState({})
    // useEffect carga los datos cuando se selecciona un usuario para editar.
    useEffect(() => {
        if (selectedUser) {
            setFormData({
                full_name: selectedUser.full_name || "",
                email: selectedUser.email || "",
                role: selectedUser.role || "user",
                password: "",
            })
        } else {
            setFormData(initialForm)
        }
    }, [selectedUser, show])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.full_name) {
            newErrors.full_name = "Nombre obligatorio"
        }
        if (!formData.email) {
            newErrors.email = "Correo obligatorio"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Correo inválido"
        }
        if (!selectedUser && formData.password.length < 8) {
            newErrors.password = "Mínimo 8 caracteres"
        }
        return newErrors
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        handleSave(formData)
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    {selectedUser ? "Editar Usuario" : "Nuevo Usuario"}
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre Completo</Form.Label>
                        <Form.Control
                            type="text"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleChange}
                            isInvalid={!!errors.full_name}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.full_name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            isInvalid={!!errors.email}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {!selectedUser && (
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                    )}

                    <Form.Group className="mb-3">
                        <Form.Label>Rol</Form.Label>
                        <Form.Select name="role" value={formData.role} onChange={handleChange}>
                            <option value="user">Usuario</option>
                            <option value="coach">Coach</option>
                            <option value="admin">Administrador</option>
                        </Form.Select>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>

                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default UserFormModal