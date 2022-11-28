import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
} from "reactstrap";
import { useNavigate } from "react-router";
import { COMPLEXIONS } from "../../utils/constants";
import CustomButton from "../../components/UI/CustomButton";
import { postApi } from "../../redux/actions/api";
import { useSelector } from "react-redux";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";

function Create({}) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    setLoading(true);
    form.poster_id = user.id;

    postApi("gigs/create", form)
      .then((resp) => {
        setLoading(false);
        alert(resp.message);
        navigate("/manage-gigs");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        alert(e.message);
      });
  };

  return (
    <ImageBackgroundWrapper>
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
                  type="textarea"
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
                      checked={form.lim_gender === "Male"}
                      onChange={() =>
                        setForm((p) => ({ ...p, lim_gender: "Male" }))
                      }
                    />{" "}
                    Male
                  </label>
                  <label className="me-3">
                    <Input
                      type="radio"
                      checked={form.lim_gender === "Female"}
                      onChange={() =>
                        setForm((p) => ({ ...p, lim_gender: "Female" }))
                      }
                    />{" "}
                    Female
                  </label>
                  <label className="me-3">
                    <Input
                      type="radio"
                      checked={form.lim_gender === "All"}
                      onChange={() =>
                        setForm((p) => ({ ...p, lim_gender: "All" }))
                      }
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
                <label>Gig start date</label>
                <Input
                  type="date"
                  name="gig_date"
                  value={form.gig_date}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="col-md-4">
                <label>Gig end date</label>
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
    </ImageBackgroundWrapper>
  );
}

export default Create;
