import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import model_image from "../../img/bg_2.jpg";
import bg_2 from "../../img/bg_2.jpg";
import { IoLocationSharp } from "react-icons/ai";
import { BsFillGeoAltFill, BsFillAlarmFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { fetchApi } from "../../redux/actions/api";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";

function Apply() {
  const { id } = useParams();
  const [gigInfo, setGigInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/details?id=${id}`)
      .then((resp) => {
        setLoading(false);
        if (resp.success && resp.data && resp.data.length) {
          setGigInfo(resp.data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <ImageBackgroundWrapper>
      <div className="mx-4">
        <Col md={10}>
          <Card
            style={{
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <CardHeader>Gigs Details</CardHeader>
            <CardBody>
              <span>Title: {gigInfo.title}</span>
              <p>{gigInfo.description}</p>
            </CardBody>
          </Card>
          <Card
            style={{
              margin: 10,
              borderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              fontFamily: 'font-family: "Gill Sans", sans-serif;',
            }}
          >
            <Form>
              <label>Message</label>
              <Input style={{ width: "60%", margin: "10px" }} />
              <label>Polaroid/Photo</label>
              <input
                type="file"
                className="form-control"
                style={{ width: "60%", margin: "10px" }}
              />
            </Form>
            <p>Boost Your Application</p>
            <span>.................</span>
            <Row>
              <Col md={6}>
                <Button style={{ width: "40%" }} className="bg-success">
                  Submit
                </Button>
              </Col>

              <Col md={6}>
                <Button
                  style={{ width: "40%", margin: "10px" }}
                  className="bg-danger "
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    </ImageBackgroundWrapper>
  );
}

export default Apply;
