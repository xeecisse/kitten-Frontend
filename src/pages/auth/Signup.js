import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import bg from "../../img/bg.jpg";
import SelectInput from "../../components/UI/SelectInput";
import "./Signup.css";
import { useNavigate } from "react-router";
import CustomButton from "../../components/UI/CustomButton";

function Signup() {
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col className="offset-md-2" md={8}>
          <Card
            style={{
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader className="h4 text-center">Signup</CardHeader>
            <CardBody>
              <Row className="login-row mt-2">
                <div className="my-2">
                  <label>Name</label>
                  <Input
                    className="form-control"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="my-2">
                  <label>Email</label>
                  <Input type="email" required placeholder="example@mail.com" />
                </div>

                <div className="my-2">
                  <label>Password</label>
                  <Input type="password" placeholder="*******" required />
                </div>
                <div className="my-2">
                  <label>You are....</label>
                  <select className="form-control">
                    <option>select</option>
                    <option>Model</option>
                    <option>Makeup Artist</option>
                    <option>Photographer</option>
                    <option>Stylyist</option>
                    <option>Company</option>
                  </select>
                </div>

                <div className="text-center mt-2">
                  <CustomButton
                    color="dark"
                    className="px-5"
                    onClick={() => navigate("/model-list")}
                  >
                    Submit
                  </CustomButton>
                </div>

                <div className="text-center">
                  <hr style={{ padding: 0 }}></hr>
                  <p
                    style={{
                      fontSize: "13px",
                      marginTop: 5,
                      color: "grey",
                    }}
                  >
                    Already have an account?{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/Login")}
                    >
                      Login here!
                    </span>{" "}
                  </p>
                </div>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
