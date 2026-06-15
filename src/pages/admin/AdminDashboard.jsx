import { Card, Row, Col, Button } from "react-bootstrap"

function AdminDashboard() {
    return (
        <>
            <h2>Panel de Administración</h2>

            <Row className="g-4">

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Usuarios</Card.Title>
                            <p>Gestiona los usuarios del sistema</p>
                            <Button>Ir al módulo</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Estadísticas</Card.Title>
                            <p>Visualiza datos del sistema</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Reportes</Card.Title>
                            <Button>Descargar</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default AdminDashboard