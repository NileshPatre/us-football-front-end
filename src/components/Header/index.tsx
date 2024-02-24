import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import "./header.scss";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" className="header">
      <Container fluid>
        <Navbar.Brand className="header__title">Sports Match</Navbar.Brand>
        <Row className="justify-content-between align-items-center">
          <Col xs={6} lg={3} className="text-center text-lg-start">
            <div className="header__team">
              <img
                src="team1-logo.png"
                alt="Team 1 Logo"
                className="team-logo"
              />
              <span className="team-name">Team 1</span>
            </div>
          </Col>
          <Col xs={6} lg={2} className="text-center">
            <div className="header__versus">VS</div>
          </Col>
          <Col xs={6} lg={3} className="text-center text-lg-end">
            <div className="header__team">
              <img
                src="team2-logo.png"
                alt="Team 2 Logo"
                className="team-logo"
              />
              <span className="team-name">Team 2</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
