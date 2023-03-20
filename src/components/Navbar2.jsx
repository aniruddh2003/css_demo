import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/css.jpg";
import "./Navbar2.css";
import { Link } from "react-router-dom";
// import {FontAwesomeIcon} from "font-awesome";

function Navbar2() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      className="w-full"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="round md:h-20 lg:h-32 h-12">
            <img src={logo} alt="img" className="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* 
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
             */}
          </Nav>
          <Nav>
            <Link
              to="/"
              className="underline text-[1.5rem] p-2 decoration-transparent text-inherit transition duration-300 ease-in-out hover:decoration-inherit"
            >
              Home
            </Link>

            <Link
              to="/team"
              className="underline text-[1.5rem] p-2 decoration-transparent text-inherit transition duration-300 ease-in-out hover:decoration-inherit"
            >
              Team
            </Link>

            <Link
              to="/events"
              className="underline text-[1.5rem] p-2 decoration-transparent text-inherit transition duration-300 ease-in-out hover:decoration-inherit"
            >
              Events
            </Link>
            {/* <Link
              href="#about"
              className="underline text-[1.5rem] p-2 decoration-transparent text-inherit transition duration-300 ease-in-out hover:decoration-inherit"
            >
              About Us
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
