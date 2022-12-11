import React, { useEffect, useState } from "react";
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
import { fetchApi, postApi } from "../../redux/actions/api";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accountTypes, setAccountTypes] = useState([]);
  const [form, setForm] = useState({
    app: "Model",
  });
  const [loading, setLoading] = useState(false);

  const getAccountTypes = () => {
    fetchApi("account_types")
      .then((resp) => {
        // console.log(resp);
        if (resp && resp.data) {
          setAccountTypes(resp.data);
        }
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getAccountTypes();
  }, []);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    setLoading(true);
    postApi("users/create", form)
      .then((resp) => {
        if (resp && resp.success) {
          // alert(resp.message);
          dispatch(
            login(
              form,
              () => {
                setLoading(false);
                navigate("/");
              },
              () => {
                setLoading(false);
              }
            )
          );
        } else {
          setLoading(false);
          console.log(resp);
          alert(resp.message);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <ImageBackgroundWrapper
      bg={bg}
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
            <CardHeader className="h4 text-center">Signup</CardHeader>
            <CardBody>
              <Row className="login-row mt-2">
                <div className="row">
                  <div className="my-2 col-md-6">
                    <label>First Name</label>
                    <Input
                      className="form-control"
                      placeholder="e.g. John"
                      required
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="my-2 col-md-6">
                    <label>Last Name</label>
                    <Input
                      className="form-control"
                      placeholder="e.g. Doe"
                      required
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>

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
                <div className="my-2">
                  {/* <SelectInput
                    label="You are...."
                    name="account_type"
                    value={form.account_type}
                    onChange={handleChange}
                    options={accountTypes.map((a) => a.name)}
                  /> */}
                  <label>You are....</label>
                  <select
                    className="form-control"
                    name="account_type"
                    value={form.account_type}
                    onChange={handleChange}
                  >
                    <option>--select--</option>
                    {accountTypes
                      .map((a) => a.name)
                      .map((acc, i) => (
                        <option key={i} value={acc}>
                          {acc}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="text-center mt-2">
                  <CustomButton
                    color="dark"
                    className="px-5"
                    onClick={handleSubmit}
                    loading={loading}
                  >
                    Submit
                  </CustomButton>
                </div>

                {/* <div>
                  <hr />
                  <p className="text-center">Signup with </p>
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
                </div> */}

                <div className="text-center">
                  <hr style={{ padding: 0 }}></hr>
                  <p
                    style={{
                      fontSize: "13px",
                      marginTop: 5,
                      // color: "grey",
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
    </ImageBackgroundWrapper>
  );
}

export default Signup;
