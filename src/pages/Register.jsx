import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Card, Form, Button, Alert } from "react-bootstrap"

function Register() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})

    const [error, setError] = useState(" ")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.full_name) {
            newErrors.full_name = "El nombre es obligatorio"
        } else if (formData.full_name.length > 50) {
            newErrors.full_name = "Máximo 50 caracteres"
        }
        if (!formData.email) {
            newErrors.email = "El correo es obligatorio"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Correo inválido"
        }
        if (!formData.password) {
            newErrors.password = "La contraseña es obligatoria"
        } else if (formData.password.length < 8) {
            newErrors.password = "Mínimo 8 caracteres"
        }
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validationErrors = validate()

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        try {
            await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            navigate("/login")
        } catch (err) {
            setError("Error al registrarse")
        }
    }

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card style={{ width: "25rem" }}>
                <Card.Body>
                    <h3 className="text-center">Registro</h3>

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="full_name"
                                onChange={handleChange}
                                isInvalid={!!errors.full_name}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.full_name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button className="mt-3 w-100" type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Register