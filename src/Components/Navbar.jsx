import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function Navagation() {
  return (
    <div className='navagation'>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/' style={{fontSize: '8vh', marginLeft: '0'}} id='nav-title'>Little Heretic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Work" id="nav-links">
            <NavDropdown.Item as={Link} to='/work' id='nav-links'>Discography</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/pdf' id='nav-links'>Writing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/upcoming" id='nav-links'>Upcoming</Nav.Link>
            <Nav.Link as={Link }to="/contact" id='nav-links'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navagation;