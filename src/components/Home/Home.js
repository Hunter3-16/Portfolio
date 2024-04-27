import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/photo.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello Everyone!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Divyanshu Shukla</strong>
              </h1>
              <br></br>
              <h2 className="heading-name-second">
                I am a Full Stack Web Developer who loves to create <strong className="main-name"> Reliable, 
Scalable</strong> and <strong className="main-name"> Efficient </strong> problems of Today and Tomorrow.
              </h2>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px", border:"5px solid rgb(48, 255, 48)" , borderRadius: "50%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
