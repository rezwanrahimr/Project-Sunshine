import { onAuthStateChanged,signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import auth from '../../firebase.init';

const Header = () => {
  const [user,setUser] = useState({});
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      console.log(user);
      if(user){
        setUser(user);
      }
      else{
        setUser({});
      }
    },[])
  })
  // signOUT
  const signOutUser = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => { });
  };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>ED-TECH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Service</Nav.Link>
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
            {
              user?.uid ? (<Nav.Link eventKey={2} onClick={signOutUser} href="/login">
                SIGN-OUT
             </Nav.Link>) : (<Nav.Link eventKey={2} onClick={signOutUser} href="/login">
                LOGIN
             </Nav.Link>)
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;