import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx" >
      <img src={imgUrl} className="card"/>
         <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div>
        <a href={url} className="but2">View Project</a>
      </div>
    </Col>
  )
}
