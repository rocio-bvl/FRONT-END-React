import { Link, Outlet, useNavigate } from "react-router-dom"
import { Navbar, Container, Button, Nav } from "react-bootstrap"
import { logout, getUser } from "../services/authService"
import logo from "../assets/logo.png"


function CoachLayout() {
    const navigate = useNavigate()
    const user = getUser()
    const handleLogout = () => {
        logout();
        navigate("/login")
    }

    return (
        <>
            <Navbar bg="success" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="40" />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/coach/dashboard">
                            Inicio
                        </Nav.Link>
                        <Nav.Link>Mis Alumnos</Nav.Link>
                        <Nav.Link>Reportes</Nav.Link>
                        <Nav.Link as={Link} to="/coach/profile">
                            Mi Perfil
                        </Nav.Link>
                    </Nav>

                    <span className="text-white me-3">
                        {user?.full_name}
                    </span>

                    <Button variant="outline-light" onClick={handleLogout}>
                        Cerrar sesión
                    </Button>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Outlet />
            </Container>
        </>
    )
}

export default CoachLayout