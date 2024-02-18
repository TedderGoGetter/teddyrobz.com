import "./header.scss"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const Header = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Teddy Robinson</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#about">Who am I</Nav.Link>
            <NavDropdown title="Fun Stuff" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Prompt generator</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Oblique</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header