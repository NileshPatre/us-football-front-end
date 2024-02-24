import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { CardGroup, ListGroup } from "react-bootstrap";
import {
  CompareGroup,
  PlayerCardStats,
  TeamsHeaders,
  CardGroup as CardGroupType,
  CardDetails
} from "../../types/globalTypes";
type Props = {
  cardData: PlayerCardStats;
};
const PlayerCard: React.FC<Props> = ({ cardData }) => {
  return (
    <Card className="text-center">
      <Card.Header>{cardData.header}</Card.Header>
      <Card.Body>
        <Card.Title>
          <Row>
            {cardData.teamsHeader.map((header: TeamsHeaders) => {
              return <Col key={header.teamName}>{header.teamName}</Col>;
            })}
          </Row>
        </Card.Title>
        {cardData.compareGroup.map((compare: CompareGroup, index: number) => {
          return (
            <CardGroup key={index}>
              {compare.cardGroup.map((card: CardGroupType) => {
                return (
                  <Card key={card.title}>
                    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      {/* <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text> */}

                      <ListGroup className="list-group-flush">
                        {card.cardDetails.map((cardData: CardDetails) => {
                          return (
                            <ListGroup.Item key={cardData.statName}>
                              {cardData.statName} - {cardData.value}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                );
              })}
            </CardGroup>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
