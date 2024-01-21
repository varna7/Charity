import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Socials from "../Socials/Socials";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar-main ">
        <div className="topbar-socials"><Socials/><hr /></div>
      
      
      <div className="topbar-nav px-lg-5 ">
        <Navbar  expand="lg" >
          <Navbar.Brand href="#home"><img src="https://demo.bosathemes.com/bosa/charity-02/wp-content/uploads/sites/43/2021/04/bosa-charity02-logo-01.png" alt="" className=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-lg-auto p-3">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#services">TESTIMONIALS</Nav.Link>
              <Nav.Link href="#services">GALLARY</Nav.Link>

              <Nav.Link href="#contact">CONTACT</Nav.Link>
              <button>Donate Now</button>
            </Nav>
            <div className="d-lg-none ml-auto bg-light text-dark p-2">
           <Socials/>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Topbar;
