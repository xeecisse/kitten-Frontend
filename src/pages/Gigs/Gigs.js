import React from "react";
import { Button, Card, Col, Form, FormGroup, Input } from "reactstrap";
import model_image from "../../img/bg_2.jpg";
import bg_2 from "../../img/bg_2.jpg";
import { IoLocationSharp } from "react-icons/ai";
import { BsFillGeoAltFill, BsFillAlarmFill } from "react-icons/bs";
import { useNavigate } from "react-router";
function Gigs({ Model = {} }) {
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
              margin: "50px",
              orderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <div className="container">
              <div className="row"></div>

              <div className="row align-items-center my-1 my-xs-3 my-sm-3">
                <div className="md-1 col-sm-3 d-none d-sm-flex d-md-flex d-lg-flex d-xl-flex">
                  <img src={model_image} className="img-fluid rounded" />
                </div>

                <div className="col-md-5 col-sm-9">
                  <p className="display-6 text-white">Description</p>
                  <p>
                    “I'm no model lady. ... “The secret to modeling is not being
                    perfect. ... “I don't want to be a supermodel; I want to be
                    a role model.” ... “We are often taught to look for the
                    beauty in all things, so in finding it, the layman asks the
                    philosopher while the philosopher asks the photographer.”
                  </p>
                </div>
              </div>
            </div>
            <div>
              <BsFillGeoAltFill size={18} className="mr-2" />
              <p>kano state,Nigeria</p>
            </div>
            <BsFillAlarmFill />
            <p>Casting Ends : 1-Dec-2022</p>
            <Button onClick={() => navigate("/view-gigs")}>View</Button>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default Gigs;
