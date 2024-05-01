import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import resume from "../../Assets/Projects/resume.png";
import chat from "../../Assets/Projects/chat.png";
import ecom from "../../Assets/Projects/ecom.png";
import gym from "../../Assets/Projects/gym.png";
import blog from "../../Assets/Projects/blog.png";
import recipe from "../../Assets/Projects/recipe.png";
import windows from "../../Assets/Projects/windows.png";
import crypto from "../../Assets/Projects/crypto.png";
import weather from "../../Assets/Projects/weather.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Hunter Aesthetics"
              description="Hunter Aesthetics, a React web app, simplifies workout planning with Rapid API, offering 3000+ exercises searchable by muscle group and equipment. It seamlessly integrates extensive exercise data, providing a diverse range of workout options via an intuitive interface. Users can access curated YouTube tutorials, enhancing the overall workout experience. The site is hosted on Netlify for reliable online accessibility."
              ghLink="https://github.com/Hunter3-16/Hunter-Aesthetics"
              demoLink="https://hunteraesthetics.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Hunter"
              description="Recipe Hunter, launched in February 2024 and hosted live on GitHub and Netlify, is a ReactJS application using Tailwind CSS, JavaScript, JSX, Redux, and APIs. It boasts a sleek design with dark mode, utilizes the ThemesLab API for diverse cuisine searches, and enriches user experience with detailed information and embedded YouTube videos for visual instructions, creating an engaging platform for culinary exploration."
              ghLink="https://github.com/Hunter3-16/Recipe-Hunter"
              demoLink="https://recipehunterds.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Snap Kart"
              description="Snap Kart is a full-stack E-Commerce website built on ReactJS, ExpressJS, NodeJS, and MongoDB, styled with TailwindCSS. It features a user-friendly interface, secure Login and Registration functionalities, and seamless integration of a Payment Gateway using Stripe for smooth transactions. The Admin portal allows efficient item addition and order management, ensuring a seamless shopping experience."
              ghLink="https://github.com/Hunter3-16/SnapKart"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Builder"
              description="Resume Builder is a ReactJS web app hosted on GitHub and live on Netlify, utilizing Tailwind CSS, JavaScript, JSX, Redux, and APIs. It provides customizable resume templates, a print feature for easy printing, and an intuitive editing interface for seamless content modification, prioritizing user flexibility and experience.
              "
              ghLink="https://github.com/Hunter3-16/Resume-Builder"
              demoLink="https://resumebuilderds.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Hunter Blogs"
              description="A full-stack Blogging website employs ReactJS, ExpressJS, NodeJS, and MongoDB with robust Login features for data privacy and personalized experiences. CRUD operations enable easy content management. Users can Like and Comment, fostering community engagement, while a visually stunning UI ensures a user-friendly experience, enhancing user engagement."
              ghLink="https://github.com/Hunter3-16/Hunter-Blogs"
              demoLink="https://www.youtube.com/watch?v=G5YzZzg0Fmc" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chit-Chat"
              description="I'm excited to introduce my latest project, an end-to-end encrypted chat app built on the MERN stack. This project blends innovation and security, addressing the demand for digital privacy. Utilizing Diffie-Hellman Key Exchange and AES encryption, messages are secure and accessible only to authorized recipients, ensuring full control and peace of mind."
              ghLink="https://github.com/Hunter3-16/Chit-Chat"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7187787258886873088/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={windows}
              isBlog={false}
              title="Windows 11 Clone"
              description="Experience a fully interactive Windows 11 Clone directly in your browser! Powered by ReactJS and Tailwind CSS, I've created a virtual desktop mirroring Windows 11's aesthetics and functionality. Navigate through a familiar interface with a Command Prompt, integrated Chrome Browser, dynamic Taskbar, Notification Panel, login PIN security, and functional Windows Explorer."
              ghLink="https://github.com/Hunter3-16/Windows-11-Clone"
              demoLink="https://windows11cloneds.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Hunter"
              description="This dynamic ReactJS web app, styled with Tailwind CSS, prioritizes universal user-friendliness. It utilizes real-time data from top cryptocurrency APIs to display current values, market capitalization, and growth percentages of the top 50 cryptocurrencies in INR. Offering comprehensive insights, it empowers users with essential crypto market information for informed decisions, making it an indispensable tool for staying updated on digital assets worldwide."
              ghLink="https://github.com/Hunter3-16/CryptoHunter"
              demoLink="https://cryptoexhunter.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="This versatile ReactJS web app seamlessly switches between Hindi and English, ensuring a user-friendly experience. It provides real-time weather data from the Open Weather API for over 50,000 cities worldwide, including temperature, humidity, air pressure, sunrise and sunset times, empowering users with essential information for daily planning."
              ghLink="https://github.com/Hunter3-16/WeatherApp"
              demoLink="https://weatherappdivyanshu.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
