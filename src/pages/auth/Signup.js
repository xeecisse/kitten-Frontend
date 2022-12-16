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
    <div style={{display:'flex', justify:'center', alignItems:'center', height:'100vh'}}>
      <div>

      <Row className="m-0 p-0">
        
        <Col>
          <Card
            className="shadow main_card"
          >
            {/* <CardHeader className="h4 text-center">laloona</CardHeader> */}
            <CardBody>
              <h1 className="brand_name">laloona</h1>
              <Row className="login-row mt-2">
                <div className="my-2">
                  <label>Name</label>
                  <Input
                    className="form-control"

                    required
                  />
                </div>

                <div className="my-2">
                  <label>Email</label>
                  <Input type="email" required />
                </div>

                <div className="my-2">
                  <label>Password</label>
                  <Input type="password" required />
                </div>
                <div className="my-2">
                  <label>You are....</label>
                  <select className="form-control">
                    <option>select</option>
                    <option>Model</option>
                    <option>Makeup Artist</option>
                    <option>Photographer</option>
                    <option>Stylist</option>
                    <option>Company</option>
                  </select>
                </div>

                <div className="text-center mt-2">
                  <CustomButton
                    color="dark"
                    className="px-5"
                    onClick={() => navigate("/model-list")}
                  >
                    Signup
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

    </div>
  );
}

export default Signup;
