import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import model_image from "../../img/bg_2.jpg";
import bg_2 from "../../img/bg_2.jpg";
import { IoLocationSharp } from "react-icons/ai";
import { BsFillGeoAltFill, BsFillAlarmFill } from "react-icons/bs";
import { useNavigate } from "react-router";
function Apply({ Model = {} }) {
  const navigate = useNavigate();
  return (
    <div
      className="m-0"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bg_2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Form>
        <div className="row">
          <Col md={8}>
            <Input style={{ margin: "10px" }} />
          </Col>

          <Col md={3}>
            <Input style={{ margin: "10px" }} />
          </Col>
        </div>
      </Form>
      <div className="mx-5">
        <Col md={10}>
          <Card
            style={{
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader>Gigs Details</CardHeader>
            <CardBody>
              <span>Title: Halloween Look</span>
              <p>
                Description: “I'm no model lady. ... “The secret to modeling is
                not being perfect. ... “I don't want to be a supermodel; I want
                to be a role model.” ... “We are often taught to look for the
                beauty in all things, so in finding it, the layman asks the
                philosopher while the philosopher asks the photographer.”
              </p>
            </CardBody>
          </Card>
          <Card
            style={{
              margin: 10,
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <Form>
              <label>Message</label>
              <Input style={{ width: "60%", margin: "10px" }} />
              <label>Polaroid/Photo</label>
              <input
                type="file"
                className="form-control"
                style={{ width: "60%", margin: "10px" }}
              />
            </Form>
            <p>Boost Your Application</p>
            <span>.................</span>
            <Row>
              <Col md={6}>
                <Button style={{ width: "40%" }} className="bg-success">
                  Submit
                </Button>
              </Col>

              <Col md={6}>
                <Button
                  style={{ width: "40%", margin: "10px" }}
                  className="bg-danger "
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default Apply;
