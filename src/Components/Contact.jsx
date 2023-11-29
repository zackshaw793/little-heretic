import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import SocialMedia from "./SocialMedia";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/1409c5e0-8bcf-11ee-b845-ef7a69cb6862"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
        e.target.submit();
      });
  };

  if (submitted) {
    return (
     <Container className="fluid d-grid justify-content-center align-items-center">
        <br />
        <br />
        <h3 id="submission-confirm">I will be in touch soon.</h3>
     </Container>
    );
  }

  return (
    <>
    <div>
        <h1 className=" justify-content-center align-items-center" id="contact-title">Get In Touch</h1>
    </div>
  
    <Container className="fluid d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group controlId="formName"
                    className="mb-3">
          <Form.Control
            type="text"
            placeholder="Your name"
            className="form-text"
            name="name"

            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail"
                    className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            className="form-text"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage"
                    className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Your message"
            className="form-text"
            name="message"
            required
          />
        </Form.Group>

        <Button
          variant="outline-secondary"
          type="submit"
          className="button-custom2"
        >
          Send a message
        </Button>
      
      </Form>
    </Container>

    <SocialMedia />
    
    </>

  );
};

export default ContactForm;