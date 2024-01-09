import { Navbar, Container, Nav } from "react-bootstrap";
import { ThemeToggler } from "./ThemeToggler";

export const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="p-3 mb-5" fixed="top" style={{ backgroundColor: "black" }}>
            <Container>
                <Navbar.Brand href="/" className="fs-4 highlight" style={{ color: "#854ce6" }}>
                    <span>
                        <b>S</b>usmitha
                        <b> P</b>apani
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle className="bg-light" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="text-white fs-5 px-3" href="#about">About</Nav.Link>
                        <Nav.Link className="text-white fs-5 px-3" href="#experience">Experience</Nav.Link>
                        <Nav.Link className="text-white fs-5 px-3" href="#skills">Skills</Nav.Link>
                        <Nav.Link className="text-white fs-5 px-3" href="#projects">Projects</Nav.Link>
                        <Nav.Link className="text-white fs-5 px-3" href="#education">Education</Nav.Link>
                    </Nav>
                    <ThemeToggler />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

