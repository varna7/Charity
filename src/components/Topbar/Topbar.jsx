import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Socials from "../Socials/Socials";
import logo from "../../assets/logo.png"
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar-main ">
      <div className="topbar-socials">
        <Socials />
        <hr />
      </div>

      <div className="topbar-nav px-lg-5 ">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt=""
              className=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-lg-auto p-3">
              <Nav.Link href="/">HOME</Nav.Link>
              <NavDropdown
                    title="ABOUT"
                    
                  >
                    <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action4">
                      Governing Body
                    </NavDropdown.Item>
                    
                  </NavDropdown>
              
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#services">GALLARY</Nav.Link>

              <Nav.Link href="#contact">CONTACT</Nav.Link>
              
            </Nav>
            <div className="d-md-none ml-auto bg-light text-dark p-2">
              <Socials />
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Topbar;
