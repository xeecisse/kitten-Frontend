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
  Row,
} from "reactstrap";
import model_image from "../../img/bg_2.jpg";
import bg_2 from "../../img/bg_2.jpg";
import { IoLocationSharp } from "react-icons/ai";
import { BsFillGeoAltFill, BsFillAlarmFill } from "react-icons/bs";
import { useNavigate } from "react-router";

function ViewGigs({ Model = {} }) {
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
            <div className="container">
              <Row>
                <Col md={6}>
                  {/* <div className=" col-md-6 p-2"> */}
                  <img src={model_image} className="img-fluid rounded" />
                  {/* </div> */}
                </Col>
                <Col md={6}>
                  {/* <div className="col-md-5 col-sm-9 "> */}
                  <p className="display-6 text-dark">Description</p>
                  <p>
                    “I'm no model lady. ... “The secret to modeling is not being
                    perfect. ... “I don't want to be a supermodel; I want to be
                    a role model.” ... “We are often taught to look for the
                    beauty in all things, so in finding it, the layman asks the
                    philosopher while the philosopher asks the photographer.”
                  </p>
                  <BsFillGeoAltFill size={18} className="mr-2" />
                  <p>kano state,Nigeria</p>
                  {/* </div> */}
                  <BsFillAlarmFill />
                  <p>Casting Ends : 1-Dec-2022</p>
                  <Button
                    className="offset-md-9"
                    onClick={() => navigate("/apply-gigs")}
                  >
                    Apply now
                  </Button>
                  {/* </div> */}
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col md={10}>
          <Card
            style={{
              margin: "10px",
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader>Requirement</CardHeader>
            <CardBody>
              <p>Gender: female</p>
              <p>Age Range: 18-21</p>
              <p>Shape: curvy</p>
              <p>Speciality:Commercial video</p>
              <p>Shape:5ft</p>
            </CardBody>
          </Card>
        </Col>
        <Col md={10}>
          <Card
            style={{
              margin: "10px",
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader>Payment</CardHeader>
            <CardBody>
              <p>Paid/Collaboration</p>
              <p>
                Explaination: fashion, glamour, fitness, bikini, fine art,
                body-part, promotional and commercial print models. Models are
                featured in a variety of media formats including: books,
                magazines, films, newspapers, internet and television
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col md={10}>
          <Card
            style={{
              margin: "10px",
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader>More Information</CardHeader>
            <CardBody>
              <p>Activities on this gigs</p>
              <p>Applied:20</p>
              <p>Invited:10</p>
              <Button
                className="offset-md-10"
                onClick={() => navigate("/apply-gigs")}
              >
                Apply Now!!
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={10}>
          <Card
            style={{
              margin: "10px",
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader>About Client</CardHeader>
            <CardBody>
              <p>Name:Mustapha Issa Toyin</p>
              <p>Location:Kano, Nigeria</p>
              <p>Gigs Posted:10</p>
              <Button
                className="offset-md-10"
                onClick={() => navigate("/apply-gigs")}
              >
                Apply Now!!
              </Button>
              {/* <Button onClick={() => navigate("/apply-gigs")}>View</Button> */}
            </CardBody>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default ViewGigs;
