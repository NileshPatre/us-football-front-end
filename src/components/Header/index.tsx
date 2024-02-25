import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./header.scss";
import { Header as HeaderType, TeamsHeaders } from "../../types/globalTypes";
import { ReactSVG } from "react-svg";
type Props = {
  headerData: HeaderType;
};
const Header: React.FC<Props> = ({ headerData }) => {
  return (
    <Container fluid className="header">
      <Row className="justify-content-between align-items-center">
        {headerData.teamsHeader.map(
          (team: TeamsHeaders, headerIndex: number) => {
            return (
              <React.Fragment key={team.teamName}>
                <Col className="text-center text-lg-start">
                  <div className="header__team">
                    <div className="team-icon">
                      {team.logo && <ReactSVG src={team.logo} />}
                    </div>
                    <span className="team-name">{team.teamName}</span>
                  </div>
                </Col>
                {headerIndex === 0 && (
                  <Col className="text-center">
                    <div className="header__versus">VS</div>
                  </Col>
                )}
              </React.Fragment>
            );
          }
        )}
      </Row>
    </Container>
  );
};

export default Header;
