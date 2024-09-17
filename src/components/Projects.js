import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/image/color-sharp2.png";
import projImg1 from "../assets/image/project-img1.png";
export const Projects = () => {
  const projects = [
    {
      title: "Buisness Website",
      description: "This is a website for a buisness",
      imgUrl: projImg1,
    },
    {
      title: "Buisness Website",
      description: "This is a website for a buisness",
      imgUrl: projImg1,
    },
    {
      title: "Buisness Website",
      description: "This is a website for a buisness",
      imgUrl: projImg1,
    },
    {
      title: "Buisness Website",
      description: "This is a website for a buisness",
      imgUrl: projImg1,
    },
    {
      title: "Buisness Website",
      description: "This is a website for a buisness",
      imgUrl: projImg1,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my projects</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">sample data</Tab.Pane>
                <Tab.Pane eventKey="third">sample data</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
