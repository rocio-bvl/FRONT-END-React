import { Row, Col, Card, Button } from "react-bootstrap"

function CoachDashboard() {
    return (
        <>
            <h2 className="mb-4">Panel Coach</h2>

            <Row className="g-4">

                <Col md={5}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mis alumnos</Card.Title>
                            <Button>Ver progreso</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={7}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Horario</Card.Title>
                            <p>Tabla de clases</p>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </>
    )
}

export default CoachDashboard