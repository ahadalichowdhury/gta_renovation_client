import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/image/Navlogo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="white" variant="white" fixed="top" className="mb-5">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" width={"100"} height={60} />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Works</Nav.Link>
            <Nav.Link href="#review">Reviews</Nav.Link>
            <Nav.Link href="#hire_us">Hire Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
