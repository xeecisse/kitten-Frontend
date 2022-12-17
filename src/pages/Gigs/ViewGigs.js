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
import CustomButton from "../../components/UI/CustomButton";

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
    <div>


      {loading && <Spinner color="white" />}
      {/* {JSON.stringify(gigInfo)} */}
      <div className="my-1">
        <Row className="p-0 m-0 mt-4">
          <Col md={7}>

            <Card className="shadow gig_card"
              style={{

              }}
            >
              <div className="">
                <Row className="m-0 p-0">
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
                    <p className="gig_title">{gigInfo.title}</p>
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
                    <CustomButton

                      onClick={() => setProposalIsOpen(true)}
                    // onClick={() => navigate(`/submit-proposal/${id}`)}
                    >
                      Apply now
                    </CustomButton>
                    {/* </div> */}
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
          <Col md={5}>

            <Card
              className="gig_card shadow mb-3"
            >
              {/* <CardHeader tag={"h5"}>Requirement</CardHeader> */}
              <CardBody>
              <h4 className='git_title'>Requirement</h4>

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
            <Card
              className="gig_card shadow mb-3"
            >
              {/* <CardHeader tag="h5">Payment</CardHeader> */}
              <CardBody>
              <h4 className='git_title'>Payment</h4>
                
                <p>{gigInfo.payment_type}</p>
                <p>Explaination: {gigInfo.payment_details}</p>
              </CardBody>
            </Card>
            <Card
              className="gig_card shadow mb-3"

            >
              {/* <CardHeader tag={"h5"}>More Information</CardHeader> */}
              <CardBody>
              <h4 className='git_title'>More Information</h4>

                <p>Activities on this gigs</p>
                <p>Applied: {gigInfo.applied_no}</p>
                <p>Invited: {gigInfo.invited_no}</p>
                <CustomButton
                  className="text-white"
                 
                  onClick={() => setProposalIsOpen(true)}
                // onClick={() => navigate(`/submit-proposal/${id}`)}
                >
                  Apply Now
                </CustomButton>
              </CardBody>
            </Card>
            <Card
              className="gig_card shadow mb-3"

            >
              {/* <CardHeader tag={"h5"}>About Client</CardHeader> */}
              <CardBody>
                <h4 className='git_title'>About Client</h4>
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
        </Row>






      </div>

      <SubmitProposal
        isOpen={proposalIsOpen}
        toggle={() => setProposalIsOpen((p) => !p)}
      />
    </div>
  );
}

export default ViewGigs;
