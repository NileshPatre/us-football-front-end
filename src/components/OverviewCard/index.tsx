import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Badge, ListGroup } from "react-bootstrap";
import {
  ScoreOverview,
  ScoreOverviewHeader,
  StatsList
} from "../../types/globalTypes";
import "./overviewCard.scss";
type Props = {
  cardData: ScoreOverview;
};
const OverviewCard: React.FC<Props> = ({ cardData }) => {
  return (
    <Card className="text-center overview-card">
      <Card.Header>{cardData.header}</Card.Header>
      <Card.Body>
        <Card.Title>
          <Row>
            {cardData.teamsHeader.map(
              (header: ScoreOverviewHeader, headerIndex: number) => {
                const badgeClassName =
                  headerIndex % 2 === 0
                    ? "team-header team-header-even"
                    : "team-header team-header-odd";
                return (
                  <Col key={header.teamName}>
                    <Badge className={badgeClassName}>
                      {header.teamName} (
                      {(header.score as number) > 0
                        ? `+${header.score}`
                        : `-${Math.abs(header.score as number)}`}
                      )
                    </Badge>
                  </Col>
                );
              }
            )}
          </Row>
        </Card.Title>
        <ListGroup className="stats-list">
          {cardData.statsList.map((stat: StatsList) => {
            return (
              <ListGroup.Item key={stat.statId} className="stats-item">
                <Row>
                  <Col>
                    <Badge pill bg="info" className="stat-badge-team1">
                      {stat.team1}
                    </Badge>
                  </Col>
                  <Col>
                    <Badge pill bg="info" className="stat-badge">
                      {stat.statName}
                    </Badge>
                  </Col>
                  <Col>
                    <Badge pill bg="info" className="stat-badge-team2">
                      {stat.team2}
                    </Badge>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default OverviewCard;
