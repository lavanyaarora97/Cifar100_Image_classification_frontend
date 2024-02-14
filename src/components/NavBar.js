import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import '../App.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';

function NavCom() {
  const location = useLocation();

  // Define styles for different pages
  let navbarStyle = '';
  if (location.pathname === '/') {
    navbarStyle = 'white' ;
  } else if (location.pathname === '/about') {
    navbarStyle = 'white' ;
  } else if (location.pathname === '/contact') {
    navbarStyle = 'white' ;
  }

  return (
    <div >
    <Navbar   fixed="top"   bg="primary" data-bs-theme="dark" collapseOnSelect expand="lg"  className=" w-100 container-fluid  " >
      <Container className=' ' >
        <Navbar.Brand className='fw-bol' href="#home">
       <Image style={{height:80,width:180}} src={require('../images/logov2.png')}  fluid/>   
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
       
          <Nav className=' mx-auto '>
            <Nav.Link className='fw-bold fs-5' href="#deets"><Link style={{color:location.pathname === '/'&&navbarStyle,textDecoration:"none"}} to={"/"}>Image Classification</Link></Nav.Link>
            <Nav.Link className='fw-bold fs-5' href="https://imageanalyzer.streamlit.app/">Mult Image Classification</Nav.Link>

        


            <Nav.Link className=' fw-bold fs-5' eventKey={2} href="/about">
              <Link style={{color:location.pathname === '/about'&&navbarStyle,textDecoration:"none"}}  to={"/about"}>About The project</Link>
              
            </Nav.Link>

            <Nav.Link className='fw-bold fs-5   ' href="#deets">
            <Link style={{color:location.pathname === '/contact'&&navbarStyle,textDecoration:"none"}}  to={"/contact"}>Contact</Link>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavCom;