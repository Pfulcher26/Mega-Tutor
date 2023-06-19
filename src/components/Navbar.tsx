import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import './Navbar.css'

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="w-100 justify-content-between">
                <Nav.Link to={"/"} as={NavLink} className="custom-font-size">
                    home
                </Nav.Link>
                <Nav.Link to={"/appointments"} as={NavLink} className="custom-font-size">
                    appointments
                </Nav.Link>
                <Nav.Link to={"/about"} as={NavLink} className="custom-font-size">
                    about
                </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs> 
  )
}
