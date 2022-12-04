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
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

export default function App() {
  return (
    <ImageBackgroundWrapper>
      <Row>
        <Col md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <ChatList />
        </Col>

        <Col md="6" lg="7" xl="8">
          <ChatWindow />
        </Col>
      </Row>
    </ImageBackgroundWrapper>
  );
}
