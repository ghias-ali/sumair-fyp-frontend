import React from "react";
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import "./style.css";

function Header() {

  

  return (
    <div style={{backgroundColor:"#2B468B"}}>
      <Navbar sticky="top" collapseOnSelect expand='lg' >
        <Container>
          <Navbar.Brand style={{color:"#FA9746"}}>Places Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className="justify-content-end" id='responsive-navbar-nav' >
            <Nav className="me-auto ">
              <Nav.Link  style={{color:"#FA9746"}}>Post A Ad</Nav.Link>
              <Nav.Link  style={{color:"#FA9746"}}>Favourite Ads</Nav.Link>

              <NavDropdown   title='Sumair' id='collasible-nav-dropdown'>

                <NavDropdown.Item style={{color:"#FA9746"}} href='#action/3.1'>My Profile</NavDropdown.Item>
                <NavDropdown.Item style={{color:"#FA9746"}} href='#action/3.2'>
                  My Ads
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style={{color:"#FA9746"}} href='#action/3.4'>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
              <img style={{height:"40px",width:"40px"}} src="/assetes/avatars/avatar.png" alt="avatar" />

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </div>
  );
}

export default Header;
