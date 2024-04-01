import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navBar.css"; // Import custom CSS file

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="navbar-fullwidth">
        <Container>
          <Navbar.Brand href="/">Jacob Kaufenberg</Navbar.Brand> 
          <Nav className="navItems">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/Contact">Contact Me</Nav.Link>
            <Nav.Link href="/Resume">Resume</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
