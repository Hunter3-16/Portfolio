import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Divyanshu Shukla </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I am an Aspiring Software Develepment Engineer.
            <br />
            I have completed my <span className="purple">Bachelor of Technology </span> in <span className="purple">Information Technology </span> from Babu Banarasi Das Institute of Technology and Management, Lucknow.
            <br />
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming 
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech related Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling a lot
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There is no such thing as a boring project. There are only boring executions."{" "}
          </p>
          <footer className="blockquote-footer">Divyanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
