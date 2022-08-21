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
      console.log(user.displayName);
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
        <Navbar.Brand href="/home" className='fw-bold'>ED-TECH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#service">Service</Nav.Link>
            
          </Nav>
          <Nav>
            {
              user?.uid ?( <img src={user.photoURL} className='rounded-circle'  alt="" width="30px" /> ) : (<img src=""  alt="" width="30px" />)
            }
            {
              user?.uid ? ( <Nav.Link>{user.displayName}</Nav.Link>) : (<Nav.Link>Not Found</Nav.Link>)
            }
           
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