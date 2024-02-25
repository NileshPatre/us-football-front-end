import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./subscription.scss";
interface SubscriptionModel {
  title: string;
  price: number;
  features: string[];
}
const SubscriptionCard: React.FC<{ subscription: SubscriptionModel }> = ({
  subscription
}) => {
  return (
    <Card className="h-100 gradient-background">
      <Card.Header className="subscription-header">
        {subscription.title}
      </Card.Header>
      <Card.Body>
        <span className="subscription-price">${subscription.price}</span>
        <ul>
          {subscription.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Subscribe</Button>
      </Card.Footer>
    </Card>
  );
};

const SubscriptionComponent: React.FC = () => {
  const subscriptionModels: SubscriptionModel[] = [
    {
      title: "Basic",
      price: 10,
      features: [
        "Access to live scores and game updates.",
        "Basic statistical analysis for individual players.",
        "Weekly email newsletter with highlights."
      ]
    },
    {
      title: "Standard",
      price: 20,
      features: [
        "All features of the Basic subscription.",
        "Advanced statistical analysis for teams and players.",
        "Access to historical data and trends.",
        "Customizable dashboard for personalized insights."
      ]
    },
    {
      title: "Premium",
      price: 30,
      features: [
        "All features of the Standard subscription.",
        "Predictive modeling and machine learning algorithms for game outcomes.",
        "Exclusive interviews with players and coaches.",
        "Priority customer support and dedicated account manager."
      ]
    }
  ];

  return (
    <Container>
      <Row>
        {subscriptionModels.map((subscription, index) => (
          <Col key={index} sm={4}>
            <SubscriptionCard subscription={subscription} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubscriptionComponent;
