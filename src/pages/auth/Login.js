import React, { useState } from "react";
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
import bg1 from "../../img/bg_1.jpg";
import "./Signup.css";
import { useNavigate } from "react-router";
import CustomButton from "../../components/UI/CustomButton";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";
import { useQuery } from "../../hooks";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const rdr = query.get("rdr");
  const [form, setForm] = useState({
    app: "Client",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleLogin = () => {
    setLoading(true);
    dispatch(
      login(
        form,
        () => {
          setLoading(false);
          if (rdr) {
            navigate(rdr);
          } else {
            navigate("/");
          }
        },
        () => {
          setLoading(false);
        }
      )
    );
  };

  return (
    <ImageBackgroundWrapper
      bg={bg1}
      style={{
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
            <CardHeader className="h4 text-center">Login</CardHeader>
            <CardBody>
              <Row className="login-row mt-2">
                <div className="my-2">
                  <label>Email</label>
                  <Input
                    type="email"
                    required
                    placeholder="example@mail.com"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="my-2">
                  <label>Password</label>
                  <Input
                    type="password"
                    placeholder="*******"
                    required
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
              </Row>
              <div className="text-center">
                <CustomButton
                  className="m-1 px-5"
                  onClick={handleLogin}
                  color="dark"
                  loading={loading}
                >
                  Submit
                </CustomButton>
              </div>

              <div>
                <hr />
                <p className="text-center">Continue with </p>
                <div className="d-flex flex-direction-column mt-2 justify-content-center">
                  <CustomButton className="m-1" color="danger">
                    Google
                  </CustomButton>
                  <CustomButton className="m-1" color="primary">
                    Facebook
                  </CustomButton>
                  <CustomButton className="m-1" color="warning">
                    Instagram
                  </CustomButton>
                </div>
              </div>

              <div className="text-center">
                <hr style={{ padding: 0 }}></hr>
                <p
                  style={{
                    // fontSize: "13px",
                    marginTop: 5,
                    // color: "grey",
                  }}
                >
                  First time user?{" "}
                </p>
                <Button
                  color="dark"
                  // style={{ cursor: "pointer" }}
                  onClick={() => navigate("/sign-up")}
                >
                  Create an account here!
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </ImageBackgroundWrapper>
  );
}

export default Signup;
