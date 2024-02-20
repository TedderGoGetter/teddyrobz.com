import "./header.scss"
import { Container, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap"

const Header = () => {
  return (
    <div>
        <Navbar expand="lg" >
        <Container>
            <Navbar.Brand href="/">Teddy's secret spot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <NavItem className="col-6"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="about">Who I am</Nav.Link>
            <NavDropdown title="Fun Stuff" id="basic-nav-dropdown">
                <NavDropdown.Item href="prompt">Prompt generator</NavDropdown.Item>
                <NavDropdown.Item href="oblique">Oblique</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header