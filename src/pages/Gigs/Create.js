import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import model_image from "../../img/bg_2.jpg";
import bg from "../../img/bg.jpg";
import { IoLocationSharp } from "react-icons/ai";
import { BsFillGeoAltFill, BsFillAlarmFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import SelectInput from "../../components/UI/SelectInput";
import { COMPLEXIONS } from "../../utils/constants";
import CustomButton from "../../components/UI/CustomButton";
import { postApi } from "../../redux/actions/api";

function Create({ Model = {} }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    setLoading(true);
    postApi("gigs/create", form)
      .then((resp) => {
        setLoading(false);
        alert(resp.message);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        alert(e.message);
      });
  };

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
      <Container>
        <Card
          style={{
            // width: "60%",
            // margin: "50px",
            orderRadius: "0",
            border: "none",
            backgroundColor: "rgba(127, 205, 218, 0.1)",
            color: "white",
            fontFamily: '"Gill Sans", sans-serif',
          }}
          className="my-2"
        >
          <CardHeader>Create a new gig</CardHeader>
          <CardBody>
            {/* {JSON.stringify(form)} */}
            <Form className="row">
              <FormGroup className="col-md-4">
                <label>Title</label>
                <Input
                  placeholder="Gig title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Description</label>
                <Input
                  placeholder="Description of gig"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Location</label>
                <Input
                  placeholder="Gig location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Applicable gender</label>
                <div>
                  <label className="me-3">
                    <Input
                      type="radio"
                      checked={form.gender === "Male"}
                      onChange={() =>
                        setForm((p) => ({ ...p, gender: "Male" }))
                      }
                    />{" "}
                    Male
                  </label>
                  <label className="me-3">
                    <Input
                      type="radio"
                      checked={form.gender === "Female"}
                      onChange={() =>
                        setForm((p) => ({ ...p, gender: "Female" }))
                      }
                    />{" "}
                    Female
                  </label>
                  <label className="me-3">
                    <Input
                      type="radio"
                      checked={form.gender === "All"}
                      onChange={() => setForm((p) => ({ ...p, gender: "All" }))}
                    />{" "}
                    All
                  </label>
                </div>
              </FormGroup>

              <FormGroup className="col-md-4">
                <label>Age Range</label>
                <InputGroup>
                  <Input
                    placeholder="Min age"
                    name="lim_age_min"
                    value={form.lim_age_min}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="Max age"
                    name="lim_age_max"
                    value={form.lim_age_max}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Height</label>
                <InputGroup>
                  <Input
                    placeholder="Min height"
                    name="lim_height_min"
                    value={form.lim_height_min}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="Max height"
                    name="lim_height_max"
                    value={form.lim_height_max}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormGroup>

              <FormGroup className="col-md-4">
                <label>Complexion</label>
                <select
                  className="form-control"
                  name="lim_complexion"
                  value={form.lim_complexion}
                  onChange={handleChange}
                >
                  {COMPLEXIONS.map((i, ix) => (
                    <option key={ix} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Gig End Date</label>
                <Input
                  type="date"
                  name="reg_end_date"
                  value={form.reg_end_date}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Payment option</label>
                <div>
                  <label className="me-3">
                    <Input
                      type="radio"
                      checked={form.payment_type === "Paid"}
                      onChange={() =>
                        setForm((p) => ({ ...p, payment_type: "Paid" }))
                      }
                    />{" "}
                    Paid
                  </label>
                  <label className="me-3">
                    <Input
                      type="radio"
                      checked={form.payment_type === "Collaboration"}
                      onChange={() =>
                        setForm((p) => ({
                          ...p,
                          payment_type: "Collaboration",
                        }))
                      }
                    />{" "}
                    Collaboration
                  </label>
                </div>
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Payment Details (optional)</label>
                <Input
                  placeholder="Details"
                  type="textarea"
                  name="payment_details"
                  value={form.payment_details}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Add Photos</label>
                <input type="file" className="form-control" />
              </FormGroup>
            </Form>
            <CustomButton loading={loading} onClick={handleSubmit}>
              Create
            </CustomButton>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

export default Create;
