import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { Alert, Button, Card, Container, Form, Spinner } from "react-bootstrap"
import { loginUser, saveSession } from "../services/authService"


function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!email || !password) {
            setError("Todos los campos son obligatorios")
            return
        }

        setError("")
        setLoading(true)

        try {
            const data = await loginUser({ email, password })

            saveSession(data.data.token, data.data.user)

            if (data.data.user.role === "admin") {
                navigate("/admin/dashboard")
            } else if (data.data.user.role === "coach") {
                navigate("/coach/dashboard")
            } else {
                navigate("/user/dashboard")
            }
        } catch (error) {
            Swal.fire("Error", error.message, "error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "24rem" }} className="shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-4">SportClub Login</Card.Title>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100" disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner size="sm" animation="border" /> Ingresando...
                                </>
                            ) : (
                                "Ingresar"
                            )}
                        </Button>

                        <section className="text-center mt-3">
                            <p>
                                ¿No tienes cuenta?{" "}
                                <a href="/Register">Regístrate</a>
                            </p>

                            <p>
                                <a href="/">Volver al inicio</a>
                            </p>
                        </section>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Login