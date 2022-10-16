import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bitsOfCode from "../../Assets/Projects/blog.png";
import FoodWaves from "../../Assets/Projects/FoodWaves.png";
import IEEECIET from "../../Assets/Projects/IEEE-CIET.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodWaves}
              isBlog={false}
              title="FoodWaves"
              
              description="FoodWaves : Find Recipe of Your Favorite Food. You can Recipe by Different Categories, Countries, Alphabetical, Ingredients. Made with ReactJS and themealdb API."
              ghLink="https://github.com/itsjinendrajain/FoodWaves"
              demoLink="https://foodwaves.itsjinendrajain.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IEEECIET}
              isBlog={false}
              title="IEEE CIET STUDENT BRANCH"
              description="Real Time Website Project for IEEE CIET currently hosted on the Internet and used by Chitkara University , This Website tell all details about IEEE CIET of Past events, Team and How to reach them."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://ieee.chitkara.edu.in/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
