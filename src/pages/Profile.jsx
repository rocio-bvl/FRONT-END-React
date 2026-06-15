import { useState, useEffect } from "react"
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap"
import { getUser } from "../services/authService"

function Profile() {
    const [user, setUser] = useState(null)
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
    });

    const getColor = () => {
        if (user?.role === "admin") return "danger"   // rojo
        if (user?.role === "coach") return "success"  // verde
        if (user?.role === "user") return "primary"   // azul
    }

    useEffect(() => {
        const currentUser = getUser()
        setUser(currentUser)

        if (currentUser) {
            setFormData({
                full_name: currentUser.full_name,
                email: currentUser.email,
            })
        }
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSave = () => {
        // conectar con backend
        alert("Cambios guardados (demo)")
    }

    return (
        <Container className="mt-4">
            <h2>Mi Perfil</h2>

            <Row className="g-4 mt-2">

                <Col md={4}>
                    <Card>
                        <Card.Body className="text-center">
                            <h4>{user?.full_name}</h4>
                            <p>{user?.email}</p>
                            <p><strong>Rol:</strong> {user?.role}</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <h4>Editar Información</h4>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        name="full_name"
                                        value={formData.full_name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Button onClick={handleSave}>
                                    Guardar cambios
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}

export default Profile