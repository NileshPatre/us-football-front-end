import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Badge, CardGroup, ListGroup } from "react-bootstrap";
import {
  CompareGroup,
  PlayerCardStats,
  TeamsHeaders,
  CardGroup as CardGroupType,
  CardDetails
} from "../../types/globalTypes";
import "./playerCard.scss";
import LineGraph from "../Graph";
type Props = {
  cardData: PlayerCardStats;
  showGraph?: boolean;
};
const PlayerCard: React.FC<Props> = ({ cardData, showGraph }) => {
  return (
    <Card className="text-center group-compare-card">
      <Card.Header>{cardData.header}</Card.Header>
      <Card.Body>
        <Card.Title>
          <Row>
            {cardData.teamsHeader.map(
              (header: TeamsHeaders, headerIndex: number) => {
                const badgeClassName =
                  headerIndex % 2 === 0
                    ? "team-header team-header-even"
                    : "team-header team-header-odd";
                return (
                  <Col key={header.teamName}>
                    <Badge className={badgeClassName}>{header.teamName}</Badge>
                  </Col>
                );
              }
            )}
          </Row>
        </Card.Title>
        {cardData.compareGroup.map((compare: CompareGroup, index: number) => {
          return (
            <CardGroup key={index} className="player-compare-card">
              {compare.cardGroup.map(
                (card: CardGroupType, cardIndex: number) => {
                  const badgeClass =
                    cardIndex % 2 === 0 ? "badge-team1" : "badge-team2";
                  const playerIcon =
                    cardIndex % 2 === 0
                      ? "team1-player.svg"
                      : "team2-player.svg";
                  return (
                    <Card key={card.title} className="player-card">
                      <Card.Body>
                        <Card.Img
                          className="card-icon"
                          variant="top"
                          src={`assets/images/${playerIcon}`}
                        />
                        <Card.Title className="card-title">
                          {card.title}
                        </Card.Title>
                        <ListGroup className="list-group-flush">
                          {card.cardDetails.map((cardData: CardDetails) => {
                            return (
                              <ListGroup.Item
                                key={cardData.statName}
                                className="stats-list-group-item"
                              >
                                <span>
                                  <Badge pill bg="info" className="badge-stats">
                                    {cardData.statName}
                                  </Badge>
                                </span>
                                <span>
                                  <Badge bg="info" className={badgeClass}>
                                    {cardData.value}
                                  </Badge>
                                </span>
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card.Body>
                      {showGraph && (
                        <Card.Footer className="text-muted">
                          <div>
                            <LineGraph lastFiveGames={card.lastFiveGames} />
                          </div>
                        </Card.Footer>
                      )}
                    </Card>
                  );
                }
              )}
            </CardGroup>
          );
        })}
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
