import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
//import images want to use from assests
import logo from "../assets/image/logo.svg";
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.svg";
import navIcon3 from "../assets/image/nav-icon3.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => { 
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skill"
                className={
                  activeLink === "skill" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skill")}
              >
                Skill
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "project"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("project")}
              >
                Project
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/jiyath-amasara/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.instagram.com/jiyathamasara/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

}