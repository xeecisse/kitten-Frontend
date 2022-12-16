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
import bg1 from '../../img/bg_1.jpg'
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

    <Row className="m-0 p-0">
      <Col md={6} className='m-0 p-0'>
        <ImageBackgroundWrapper
          bg={bg1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className='m-5'>
            <h1 className='auth_title'>Laloona</h1>
            <p className='auth_desc'>Take your modelling career to the next level</p>
          </div>
        </ImageBackgroundWrapper>
      </Col>

      <Col md={6}>
        <div
          style={{
            display: 'flex',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>

          <Card
            className="shadow main_card"
          >
            {/* <CardHeader className="h4 text-center">laloona</CardHeader> */}
            <CardBody>
              <h1 className="brand_name">create account</h1>
              <Row className="mt-2">
                <Row>
                  <Col>
                    <div className="">

                      <label>First Name</label>
                      <Input
                        className="form-control fnln"

                        required
                        name="firstname"
                        value={form.firstname}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="">

                      <label>Last Name</label>
                      <Input
                        className="form-control fnln"

                        required
                        name="lastname"
                        value={form.lastname}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <div className="">
                  <label>Email</label>
                  <Input
                    type="email"
                    required

                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="">
                  <label>Password</label>
                  <Input
                    type="password"

                    required
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="">
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

                <div className="text-center mt-3">
                  <CustomButton
                    color="dark"
                    className="px-5"
                    onClick={handleSubmit}
                    loading={loading}
                  >
                    Signup
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
                    Already have an account? |{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/Login")}
                    >
                      <b>Login here!</b>
                    </span>{" "}
                  </p>
                </div>
              </Row>
            </CardBody>
          </Card>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
        </div>
      </Col>
    </Row>
  );
}

export default Signup;
