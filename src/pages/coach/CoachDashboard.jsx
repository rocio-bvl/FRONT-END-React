import { Row, Col, Card, Button, Table } from "react-bootstrap"

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
                            <Card.Title>Horario Semanal</Card.Title>
                            <Table size="sm">
                                <thead>
                                    <tr>
                                        <th>Hora</th>
                                        <th>Lunes</th>
                                        <th>Martes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>18:00</td>
                                        <td>Spinning</td>
                                        <td>CrossFit</td>
                                    </tr>
                                    <tr>
                                        <td>19:00</td>
                                        <td>Yoga</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default CoachDashboard