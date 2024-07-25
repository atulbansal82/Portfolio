import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <div >
            <span className="tagline">Welcome to my Portfolio</span>
              <br></br>
              <br></br>
              <h1>Hello,</h1>
              <h1>I'm <span className="name">Atul Bansal</span></h1>
              <h1>Software Engineer</h1>
              <p>I am a Skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I love to work on web application using technologies like React, Tailwind, Next.js and MongoDB</p>
              <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
          </div>
        </Row>
      </Container>
    </section>
  )
}
