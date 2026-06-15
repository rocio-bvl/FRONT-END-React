import { Link, Outlet, useNavigate } from "react-router-dom"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { logout, getUser } from "../services/authService"
import logo from "../assets/logo.png"


function UserLayout() {
    const navigate = useNavigate()
    const user = getUser()
    const handleLogout = () => {
        logout();
        navigate("/login")
    }

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" height="40" />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/user/dashboard">
                            Inicio
                        </Nav.Link>
                        <Nav.Link>Clases</Nav.Link>
                        <Nav.Link>Reservas</Nav.Link>
                        <Nav.Link as={Link} to="/profile">
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


export default UserLayout