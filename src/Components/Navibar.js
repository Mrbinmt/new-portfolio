// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";
import { Link } from "react-scroll";

function Navibar() {
  return (
    <>
      <Navbar className="sticky-nav" bg="dark" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">Mitchell Bristow</Navbar.Brand>
          <Nav fixed="bottom" className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="about">About Me</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="skills">Skills</Nav.Link>
            <Nav.Link href="resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="top"></div>
    </>
  );
}

export default Navibar;
