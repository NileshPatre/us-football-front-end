import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { ListGroup } from "react-bootstrap";
import {
  ScoreOverview,
  ScoreOverviewHeader,
  StatsList
} from "../../types/globalTypes";
type Props = {
  cardData: ScoreOverview;
};
const OverviewCard: React.FC<Props> = ({ cardData }) => {
  return (
    <Card className="text-center">
      <Card.Header>{cardData.header}</Card.Header>
      <Card.Body>
        <Card.Title>
          <Row>
            {cardData.teamsHeader.map((header: ScoreOverviewHeader) => {
              return <Col key={header.teamName}>{header.teamName}</Col>;
            })}
          </Row>
        </Card.Title>
        <ListGroup>
          {cardData.statsList.map((stat: StatsList) => {
            return (
              <ListGroup.Item key={stat.statId}>
                <Row>
                  <Col>{stat.team1}</Col>
                  <Col>{stat.statName}</Col>
                  <Col>{stat.team2}</Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        {/* <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
  );
};

export default OverviewCard;
