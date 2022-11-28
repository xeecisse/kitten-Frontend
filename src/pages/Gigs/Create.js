import React from "react";
import {
  Button,
  ButtonGroup,
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
import bg from "../../img/bg.jpg";
import { IoLocationSharp } from "react-icons/ai";
import { BsFillGeoAltFill, BsFillAlarmFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import SelectInput from "../../components/UI/SelectInput";
function Create({ Model = {} }) {
  const navigate = useNavigate();
  return (
    <div
      className="m-0"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Card
        style={{
          width: "60%",
          margin: "50px",
          orderRadius: "0",
          border: "none",
          backgroundColor: "rgba(127, 205, 218, 0.1)",
          color: "white",
          fontFamily: 'font-family: "Gill Sans", sans-serif;',
        }}
      >
        <CardHeader>Gig Creation</CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <label>Title</label>
              <Input style={{ width: "60%" }} />
            </FormGroup>
            <FormGroup>
              <label>Description</label>
              <Input style={{ width: "60%" }} />
            </FormGroup>
            <FormGroup>
              <label>Location</label>
              <Input style={{ width: "60%" }} />
            </FormGroup>
            <FormGroup>
              <input type="radio" /> Male
              <input type="radio" /> Female
              <input type="radio" /> All
            </FormGroup>
            <Row>
              <Col md={4}>
                <label>Age Range</label>
                <Input />
              </Col>
              <Col md={4}>
                <label>Height</label>
                <Input />
              </Col>
            </Row>
            <FormGroup>
              <label>Complextion</label>
              <select className="form-control" style={{ width: "60%" }}>
                <option>black</option>
                <option>blue</option>
                <option>green</option>
                <option>brown</option>
                <option>pink</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Gig End Date</label>
              <Input style={{ width: "60%" }} />
            </FormGroup>
            <FormGroup>
              <input type="radio" /> Paid
              <input type="radio" /> Collaboration
            </FormGroup>
            <FormGroup>
              <Input placeholder="Details" style={{ width: "60%" }} />
            </FormGroup>
            <FormGroup>
              <label>Add Photo</label>
              <input
                type="file"
                className="form-control"
                style={{ width: "60%" }}
              />
            </FormGroup>
          </Form>
          <Button>Create</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Create;
