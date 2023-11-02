import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="sm" variant='dark' style={{position: "fixed", top: '0', width: '100%', zIndex: '1000', background: "#080A0F"}}>
      <Container>
        <Navbar.Brand href="/">
          
          
          <img src="logo.png" alt="logo" style={{height: '40px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='response-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className="me-auto">
            {/* <Nav.Link href="#low-prices" style={{marginLeft: "30px", color: 'White'}}>Why we charge very low</Nav.Link> */}
          </Nav>
          <Nav className="">
            <Nav.Link href="#booking" style={{marginLeft: "30px", color: 'White'}}>Book Your Free Discovery Call</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        
      </Container>
    </Navbar>
  );
}

export default NavBar;