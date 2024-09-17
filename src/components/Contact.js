import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import contactImg from "../assets/image/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (key, value) => {
    setFormDetails({ ...formDetails, [key]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json; charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ message: "Message Sent", success: true });
    } else {
      setStatus({ message: "Message Failed", success: false });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formDetails.phone}
                    onChange={(e) =>
                      onFormUpdate("Phone Number", e.target.value)
                    }
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <Button type="submit">
                    <span>{buttonText}</span>
                  </Button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={""} alt="Image5" />
    </section>
  );
};
