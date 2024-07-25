import {useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9y3f2mh', 'template_k0xy83s', form.current, {
        publicKey: 'cDjrpWXZ3kJ0cSR0U',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setFormDetails(formInitialDetails);
    };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" value={formDetails.name} onChange={(e) => onFormUpdate('name', e.target.value)}/>
                <label>Email</label>
                <input type="email" name="email" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}/>
                <label>Message</label>
                <textarea name="message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}/>
                <input type="submit" value="Send" />
              </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
