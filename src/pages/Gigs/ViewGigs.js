import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Spinner,
} from "reactstrap";
import model_image from "../../img/bg_2.jpg";
import bg_2 from "../../img/bg_2.jpg";
import { IoLocationSharp } from "react-icons/ai";
import {
  BsFillGeoAltFill,
  BsFillAlarmFill,
  BsCalendar2EventFill,
  BsCalendar2Event,
} from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { fetchApi } from "../../redux/actions/api";
import SubmitProposal from "./SubmitProposal";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import moment from "moment";

function ViewGigs() {
  const { id } = useParams();
  const [gigInfo, setGigInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [proposalIsOpen, setProposalIsOpen] = useState(false);
  const [clientInfo, setClientInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/details?id=${id}`)
      .then((resp) => {
        setLoading(false);
        if (resp.success && resp.data && resp.data.length) {
          setGigInfo(resp.data[0]);
          fetchApi(`profile/details/${resp.data[0].poster_id}`)
            .then((resp) => {
              if (resp.success && resp.data && resp.data.length) {
                setClientInfo(resp.data[0]);
              }
            })
            .catch((err) => {
              setLoading(false);
            });
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <ImageBackgroundWrapper>
      {/* <Form>
        <div className="row">
          <Col md={8}>
            <Input style={{ margin: "10px" }} />
          </Col>

          <Col md={3}>
            <Input style={{ margin: "10px" }} />
          </Col>
        </div>
      </Form> */}
      <Container>
        {loading && <Spinner color="white" />}
        {/* {JSON.stringify(gigInfo)} */}
        <div className="my-1">
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
              <div className="container">
                <Row>
                  <Col md={6}>
                    {/* <div className=" col-md-6 p-2"> */}
                    <img
                      src={gigInfo.banner}
                      className="img-fluid rounded my-3"
                    />
                    {/* </div> */}
                  </Col>
                  <Col md={6}>
                    {/* <div className="col-md-5 col-sm-9 "> */}
                    <p className="display-6 text-white">{gigInfo.title}</p>
                    <p>{gigInfo.description}</p>
                    <div className="d-flex flex-direction">
                      <BsFillGeoAltFill size={18} className="me-2" />
                      <p>{gigInfo.location}</p>
                    </div>
                    {/* </div> */}
                    <div className="d-flex flex-direction">
                      <BsCalendar2Event size={18} className="me-2" />
                      <p>Casting Start : {gigInfo.gig_date}</p>
                    </div>
                    <div className="d-flex flex-direction">
                      <BsCalendar2Event size={18} className="me-2" />

                      <p>Casting Ends : {gigInfo.reg_end_date}</p>
                    </div>
                    <Button
                      className="offset-md-9"
                      color="warning"
                      onClick={() => setProposalIsOpen(true)}
                      // onClick={() => navigate(`/submit-proposal/${id}`)}
                    >
                      Apply now
                    </Button>
                    {/* </div> */}
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col md={10}>
            <Card
              style={{
                margin: "10px",
                borderRadius: "0",
                border: "none",
                backgroundColor: "rgba(127, 205, 218, 0.1)",
                color: "white",
                fontFamily: 'font-family: "Gill Sans", sans-serif;',
              }}
            >
              <CardHeader tag={"h5"}>Requirement</CardHeader>
              <CardBody>
                <p>Gender: {gigInfo.gender}</p>
                <p>
                  Age Range: {gigInfo.lim_age_min} - {gigInfo.lim_age_max}
                </p>
                <p>Shape: {gigInfo.lim_shape}</p>
                <p>Speciality: {gigInfo.lim_speciality}</p>
                <p>
                  Height (cm): {gigInfo.lim_height_min} -{" "}
                  {gigInfo.lim_height_max}
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={10}>
            <Card
              style={{
                margin: "10px",
                borderRadius: "0",
                border: "none",
                backgroundColor: "rgba(127, 205, 218, 0.1)",
                color: "white",
                fontFamily: 'font-family: "Gill Sans", sans-serif;',
              }}
            >
              <CardHeader tag="h5">Payment</CardHeader>
              <CardBody>
                <p>{gigInfo.payment_type}</p>
                <p>Explaination: {gigInfo.payment_details}</p>
              </CardBody>
            </Card>
          </Col>
          <Col md={10}>
            <Card
              style={{
                margin: "10px",
                borderRadius: "0",
                border: "none",
                backgroundColor: "rgba(127, 205, 218, 0.1)",
                color: "white",
                fontFamily: 'font-family: "Gill Sans", sans-serif;',
              }}
            >
              <CardHeader tag={"h5"}>More Information</CardHeader>
              <CardBody>
                <p>Activities on this gigs</p>
                <p>Applied: {gigInfo.applied_no}</p>
                <p>Invited: {gigInfo.invited_no}</p>
                <Button
                  className="offset-md-10"
                  color="warning"
                  onClick={() => setProposalIsOpen(true)}
                  // onClick={() => navigate(`/submit-proposal/${id}`)}
                >
                  Apply Now
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={10}>
            <Card
              style={{
                margin: "10px",
                borderRadius: "0",
                border: "none",
                backgroundColor: "rgba(127, 205, 218, 0.1)",
                color: "white",
                fontFamily: 'font-family: "Gill Sans", sans-serif;',
              }}
            >
              <CardHeader tag={"h5"}>About Client</CardHeader>
              <CardBody>
                <p>
                  Name: {clientInfo.firstname} {clientInfo.lastname}
                </p>
                <p>
                  Location: {clientInfo.state}, {clientInfo.country}
                </p>
                <p>Gigs Posted: {clientInfo.gigs_posted || 0}</p>
                <g>Joined Laloona {moment(clientInfo.createdAt).fromNow()}</g>
                {/* <Button
                  className="offset-md-10"
                  color="warning"
                  onClick={() => setProposalIsOpen(true)}
                  // onClick={() => navigate(`/submit-proposal/${id}`)}
                >
                  Apply Now
                </Button> */}
                {/* <Button onClick={() => navigate("/apply-gigs")}>View</Button> */}
              </CardBody>
            </Card>
          </Col>
        </div>
      </Container>

      <SubmitProposal
        isOpen={proposalIsOpen}
        toggle={() => setProposalIsOpen((p) => !p)}
      />
    </ImageBackgroundWrapper>
  );
}

export default ViewGigs;
