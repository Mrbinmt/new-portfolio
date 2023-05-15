import React from "react";
import Navibar from "./Navibar";
import { Container, Row, Col } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <Navibar />
      <Container>
        {/* <Row>
          <Col className="hello">
            <div>Resume1</div>
            <div>Resume2</div>
            <div>Resume3</div>
            <div>Resume4</div>
          </Col>
          <Col className="hello1">
            <div>Resume1</div>
            <div>Resume2</div>
            <div>Resume3</div>
            <div>Resume4</div>
          </Col>
        </Row> */}
        <body>
          <h1>Mitchell Bristow</h1>
          <h2>Full Stack Web Developer</h2>
          <p>Butte, MT 59701 | Open to Remote</p>
          <p>
            Email: mitchell.bristow@mykenzie.snhu.edu | Phone: (406) 533-8212
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/Mrbinmt">https://github.com/Mrbinmt</a>
          </p>

          <div class="section">
            <h2>Summary</h2>
            <p>
              Dedicated Full Stack Web Developer with experience in product
              organization and warehouse layout optimization. Skilled in React,
              JavaScript, MongoDB, and Node.js. Eager to apply recent studies in
              back-end development, creativity, leadership, and problem-solving
              skills to enhance team productivity in a Software Developer role.
            </p>
          </div>

          <div class="section">
            <h2>Education</h2>
            <p>
              <strong>
                Kenzie Academy from Southern New Hampshire University
              </strong>
              , Indianapolis, IN (Remote)
            </p>
            <p>
              <em>Full Stack Web Development Program</em>, Expected: July 2023
            </p>
            <ul>
              <li>
                Completed a comprehensive 9-month program focused on Full Stack
                Web Development, with project-based training in React,
                JavaScript, HTML, and CSS
              </li>
            </ul>
          </div>

          <div class="section">
            <h2>Skills</h2>
            <p>
              <strong>Technical Skills:</strong> HTML, CSS, JavaScript, React,
              MongoDB, Node.js
            </p>
            <p>
              <strong>Marketable Skills:</strong> Critical thinking, Typing,
              Problem-solving
            </p>
          </div>

          <div class="section">
            <h2>Project Experience</h2>
            <ul>
              <li>
                <strong>Project Name:</strong>
              </li>
              <li>
                <strong>Project Name:</strong>
              </li>
              <li>
                <strong>Project Name:</strong>
              </li>
            </ul>
          </div>

          <div class="section">
            <h2>Work Experience</h2>
            <p>
              <strong>Senior Operations Associate</strong>, Wesco Distribution
              Inc., Butte, MT
            </p>
            <p>June 2020 - October 2022</p>
          </div>
        </body>
      </Container>
    </>
  );
};

export default Resume;
