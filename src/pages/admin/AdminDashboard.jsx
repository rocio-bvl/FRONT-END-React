import { Card, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function AdminDashboard() {
    return (
        <>
            <h2>Panel de Administración</h2>

            <Row className="g-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Gestión de Usuarios</Card.Title>
                            <p>Administra usuarios, roles y accesos.</p>
                            <Button as={Link} to="/admin/users">
                                Ir a Usuarios
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Gestión de Deportes</Card.Title>
                            <p>Administra los deportes del sistema.</p>
                            <Button as={Link} to="/admin/sports">
                                Ir a Deportes
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Estadísticas</Card.Title>
                            <p>Usuarios activos: 120</p>
                            <p>Clases disponibles: 35</p>
                            <p>Reservas: 58</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Reportes</Card.Title>
                            <p>Informe mensual de actividades.</p>
                            <Button variant="secondary">
                                Descargar informe
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Configuración</Card.Title>
                            <Button variant="outline-danger">
                                Configurar sistema
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default AdminDashboard