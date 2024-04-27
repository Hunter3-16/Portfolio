import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="hunter3-16"
        blockSize={15}
        blockMargin={5}
        color="#rgb(48, 255, 48)"
        fontSize={16}
      />
      <br></br>
      <img className="leetcode" src="https://leetcard.jacoblin.cool/Divyanshushukla82?theme=dark&font=Raleway&ext=heatmap" alt="Leetcode">
        </img>
    </Row>
  );
}

export default Github;
