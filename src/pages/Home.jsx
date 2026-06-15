import { Link } from "react-router-dom"
import { Container, Navbar, Nav, Button, Row, Col, Card } from "react-bootstrap"
import logo from "../assets/logo.png"

function Home() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" style={{ height: "50px" }} />
                    </Navbar.Brand>

                    <Nav className="ms-auto">
                        <Nav.Link>Inicio</Nav.Link>
                        <Nav.Link>Planes</Nav.Link>
                        <Nav.Link>Reservas</Nav.Link>

                        <Button as={Link} to="/login" variant="warning">
                            Iniciar sesión
                        </Button>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-dark text-white text-center p-5">
                <img src={logo} alt="logo" style={{ height: "120px" }} />

                <h1 className="mt-3">SportClub</h1>
                <h4 className="text-warning">
                    Tu mejor versión comienza hoy
                </h4>

                <p className="mt-3">
                    Entrena con profesionales, mejora tu condición física y alcanza tus objetivos.
                </p>

                <Button as={Link} to="/login" variant="warning" size="lg">
                    Comenzar ahora
                </Button>
            </div>

            <Container className="mt-5">
                <Row className="text-center mb-4">
                    <h2>¿Por qué elegir SportClub?</h2>
                </Row>

                <Row className="g-4 text-center">
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Entrenadores expertos</Card.Title>
                                <Card.Text>
                                    Profesionales capacitados para guiarte en todo momento.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Clases personalizadas</Card.Title>
                                <Card.Text>
                                    Programas adaptados a tu nivel y objetivos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Ambiente motivador</Card.Title>
                                <Card.Text>
                                    Comunidad enfocada en el progreso y bienestar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5 text-center">
                <p>
                    En <strong>SportClub</strong> creemos que el deporte transforma el cuerpo
                    y la mente.
                </p>

                <p>
                    Nuestro objetivo es acompañarte en tu proceso, sin importar tu nivel o experiencia.
                </p>

                <h5 className="mt-4 text-warning">
                    No solo vienes a entrenar, vienes a superarte 💪
                </h5>
            </Container>

            <footer className="bg-light text-center mt-5 p-3">
                <p>© 2026 SportClub</p>
            </footer>
        </>
    )
}

export default Home