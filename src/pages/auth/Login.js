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
// import bg1 from "../../img/bg1.jpg";
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
        // backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${bg1})`,
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
      {/* <Button>Login</Button> */}

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
            <CardHeader className="h4 text-center">Login</CardHeader>
            <CardBody>
              <Row className="login-row mt-2">
                <div className="my-2">
                  <label>Email</label>
                  <Input type="email" required placeholder="example@mail.com" />
                </div>

                <div className="my-2">
                  <label>Password</label>
                  <Input type="password" placeholder="*******" required />
                </div>
              </Row>
              <div className="text-center">
                <CustomButton
                  className="m-1 px-5"
                  onClick={() => navigate("/model-list")}
                  color="dark"
                >
                  Submit
                </CustomButton>
              </div>

              <div className="d-flex flex-direction-column mt-2">
                <CustomButton className="m-1" color="danger">
                  Continue with Google
                </CustomButton>
                <CustomButton className="m-1" color="primary">
                  Continue with Facebook
                </CustomButton>
                <CustomButton className="m-1" color="warning">
                  Continue with Instagram
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
                  First time user?{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Create an account here!
                  </span>{" "}
                </p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
