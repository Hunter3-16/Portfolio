import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode , SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let months = ["Jan" , "Feb" , "Mar" , "April" , "May" , "June" , "July" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"];
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Divyanshu Shukla</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Last Updated on {months[month]} {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=divyanshushukla82@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/Hunter3-16"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/divyanshu-shukla-hunter/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/Divyanshushukla82/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
