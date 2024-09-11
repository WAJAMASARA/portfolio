import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
import colorSharp from "../assets/image/color-sharp.png";

export const Skills = () => {
  const responsive = {
    SuperLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx"></div>
            <h2>Skills</h2>
            <p>I'm a web developer</p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
              <div className="item">
                <img src={meter1} alt="Image1"></img>
                <h5>web development</h5>
              </div>
              <div className="item">
                <img src={meter2} alt="Image2"></img>
                <h5>mobile development</h5>
              </div>
              <div className="item">
                <img src={meter3} alt="Image3"></img>
                <h5>Hardware development</h5>
              </div>
              <div className="item">
                <img src={meter2} alt="Image4"></img>
                <h5>software development</h5>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  );
};
