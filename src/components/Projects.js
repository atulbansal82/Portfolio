import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ProjImg1.jpg";
import projImg2 from "../assets/img/ProjImg2.jpg";
import projImg3 from "../assets/img/ProjImg3.jpg";
import trianz from "../assets/img/trianz.png";
import Nitkkr from "../assets/img/Nit-kkr.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Hostel Management System",
      description: "Design & Development",
      imgUrl: projImg1,
      url: 'https://hostel4nitkkr.000webhostapp.com/',
    },
    {
      title: "Blood Bank System",
      description: "Design & Development",
      imgUrl: projImg2,
      url: 'https://blood-bank-system-2tm4.onrender.com'
    },
    {
      title: "Portfolio",
      description: "Design & Development",
      imgUrl: projImg3,
      url:'#',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">About me</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <div className="Exp">
                       <div class="Exp1">
                            <div class="photo1">
                                <a href=""><img src={trianz}/></a>
                            </div>
                            <div class="des1">
                                <h3>Trianz consulting private limited</h3>
                                <h5>Software Engineer</h5>
                                <h6>Upcoming</h6>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div class="Exp1">
                            <div class="photo1">
                                <a href=""><img src={Nitkkr}/></a>
                            </div>
                            <div class="des1">
                                <h3>National Institute of Technology, Kurukshetra</h3>
                                <h5>B.Tech</h5>
                                <h6>Dec 2020 - Jun 2024</h6>
                            </div>
                        </div>
                       </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div >
                        <div className="col1">
                          <p>Hello, I am Atul completed my B.tech from NIT Kurukshetra in 
                          mechanical engineering. I am very 
                          passionate about coding and solving problems in a simple way. I am 
                          proficient in Data structure and Algorithms in C & C++ language and 
                          also have a good knowledge of web development. Apart from 
                          academics I love to play badminton and cricket in my free time.</p>
                          <a href="https://drive.google.com/file/d/1sgu7k02CWDDeU0bFKQgaHCKHV4Id3qBj/view?usp=sharing" className="but1">View Resume</a>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
