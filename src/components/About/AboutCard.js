import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jinendra Jain </span>
            from <span className="purple"> Chandigarh, India.</span>
            <br />I am  pursuing B.Tech in Computer Science Engineering in Chitkara University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity  ">
              <ImPointRight className="inline-block mr-2" /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight className="inline-block mr-2" /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight className="inline-block mr-2" /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jinendra</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
