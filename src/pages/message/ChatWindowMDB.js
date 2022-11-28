import React from "react";
import { FaCheck, FaClock } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardHeader,
} from "reactstrap";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

export default function App() {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        background: `linear-gradient(rgba(50,50,50,0.9),transparent)`,
        backgroundColor: "#555",
      }}
    >
      <Row>
        <Col md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <ChatList />
        </Col>

        <Col md="6" lg="7" xl="8">
          <ChatWindow />
        </Col>
      </Row>
    </Container>
  );
}
