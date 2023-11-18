import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function Navagation() {
  return (
    <div className='navagation'>
    <Navbar expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand as={Link} to='/' style={{fontSize: '8vh', marginLeft: '0'}}>Little Heretic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Work" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/work'>Discography</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/pdf'>Writing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/stream">Stream</Nav.Link>
            <Nav.Link as={Link }to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navagation;