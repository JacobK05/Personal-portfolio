import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navBar.css"

function ColorSchemesExample() {
  return (
    <>
      <Navbar  className="navbar-fullwidth">
        <Container>
          <Navbar.Brand  href="#home"> Jacob Kaufenberg </Navbar.Brand>
          <Nav className="navItems">
            <Nav.Link href="#About-me"> About Me </Nav.Link>
            <Nav.Link href="#Contact-me"> Contact Me </Nav.Link>
            <Nav.Link href="#resume"> Resume </Nav.Link>
            <Nav.Link href="#projects"> Projects </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default ColorSchemesExample;