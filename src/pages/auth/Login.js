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
import { AlignCenter } from "react-feather";

function Signup() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <div>

        <Row className="m-0 p-0">
          {/* <Col md={4}></Col> */}
          <Col>
            <Card
              className="shadow main_card"
            >
              {/* <CardHeader className="h4 text-center">laloona</CardHeader> */}
              <CardBody>
                <h1 className="brand_name">laloona</h1>
                <Row className="login-row mt-2">
                  <div className="my-2">
                    <label>Email</label>
                    <Input
                      className="form-control"
                      type='email'
                      required
                    />
                  </div>
                  <div className="my-2">
                    <label>Password</label>
                    <Input type="password" required />
                  </div>
                </Row>
                <div className="text-center mt-2">
                  <CustomButton
                    className="m-1 px-5"
                    onClick={() => navigate("/model-list")}
                    color="dark"
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
          {/* <Col md={4}></Col> */}
        </Row>
      </div>
    </div>
  )
}
export default Signup