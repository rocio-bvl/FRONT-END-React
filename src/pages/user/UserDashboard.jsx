import { Row, Col, Card, Button, ProgressBar } from "react-bootstrap"

function UserDashboard() {
    return (
        <>
            <h2 className="mb-4 text-primary">Bienvenido a SportClub</h2>

            <Row className="g-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mi Perfil</Card.Title>
                            <p>Nombre: Usuario</p>
                            <p>Email: usuario@mail.com</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Progreso</Card.Title>
                            <ProgressBar now={70} label="70%" />
                            <ul className="mt-3">
                                <li>Fuerza</li>
                                <li>Resistencia</li>
                                <li>Flexibilidad</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Clases Disponibles</Card.Title>
                            <p>Spinning</p>
                            <p>CrossFit</p>
                            <p>Yoga</p>
                            <Button size="sm">Reservar</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={12}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mis Reservas</Card.Title>
                            <p>CrossFit – Lunes 18:00</p>
                            <p>Yoga – Miércoles 19:00</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}


export default UserDashboard