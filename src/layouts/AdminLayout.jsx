import { Link, Outlet, useNavigate } from "react-router-dom"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { logout, getUser } from "../services/authService"
import logo from "../assets/logo.png"


function AdminLayout() {
    const navigate = useNavigate()
    const user = getUser()
    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return (
        <>
            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} width="120" alt="SportClub" />
                    </Navbar.Brand>

                    <Nav className="me-auto">

                        <Nav.Link as={Link} to="/admin/dashboard">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/admin/users">Usuarios</Nav.Link>
                        <Nav.Link as={Link} to="/admin/sports">Deportes</Nav.Link>
                        <Nav.Link>Estadísticas</Nav.Link>
                        <Nav.Link>Configuración</Nav.Link>
                        <Nav.Link as={Link} to="/admin/profile">Mi Perfil</Nav.Link>
                    </Nav>

                    <span className="text-white me-3">
                        {user?.full_name}
                    </span>

                    <Button variant="outline-light" onClick={handleLogout}>
                        Cerrar sesión
                    </Button>
                </Container>
            </Navbar >

            <Container className="mt-4">
                <Outlet />
            </Container>
        </> // Outlet: para mostrar páginas hijas
    )
}

export default AdminLayout
