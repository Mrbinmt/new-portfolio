import React from "react";
import Navibar from "./Navibar";
import { Container, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  return (
    <>
      <Navibar />
      <Container>
        <Row>
          <Col>
            <div className="portfolio">My Work</div>
            <div> insert work here</div>
            <div> works will be here</div>
          </Col>
          <Col>
            <div className="portfolio">My Work</div>
            <div> insert work here</div>
            <div> works will be here</div>
          </Col>
          <Col>
            <div className="portfolio">My Work</div>
            <div> insert work here</div>
            <div> works will be here</div>
          </Col>
          <div>still working on this </div>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
