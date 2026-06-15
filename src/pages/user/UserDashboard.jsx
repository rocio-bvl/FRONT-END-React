import { Row, Col, Card, Button } from "react-bootstrap"

function UserDashboard() {
    return (
        <>
            <h2 className="mb-4">Bienvenido a SportClub</h2>

            <Row className="g-4">

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mi Perfil</Card.Title>
                            <p>Revisa tu información personal</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Progreso</Card.Title>
                            <p>70% completado</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Clases</Card.Title>
                            <Button>Reservar</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default UserDashboard