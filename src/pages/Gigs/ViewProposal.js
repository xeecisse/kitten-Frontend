import moment from "moment";
import { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { BsCalendar2Event, BsFillGeoAltFill } from "react-icons/bs";
import {
  FaExclamationCircle,
  FaFacebookMessenger,
  FaPlus,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Spinner,
  Table,
} from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import { useQuery } from "../../hooks";
import bg_2 from "../../img/bg_2.jpg";
import { fetchApi } from "../../redux/actions/api";
import { getAgeFromDOB } from "../../utils";
import InviteMessage from "./InviteMessage";

export default (props) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const query = useQuery();
  const { id } = useParams();
  const gig_id = query.get("gig_id");
  const [applicantProfile, setApplicantProfile] = useState({});
  const [proposalInfo, setProposalInfo] = useState([]);
  const [gigInfo, setGigInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [messageModalOpen, setMessageModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/proposal-info/${id}/`)
      .then((resp) => {
        setLoading(false);
        if (resp.data && resp.data.length) {
          setProposalInfo(resp.data[0]);
          fetchApi(`profile/details/${resp.data[0].applicant_id}`)
            .then((resp) => {
              if (resp.success && resp.data && resp.data.length) {
                setApplicantProfile(resp.data[0]);
              }
            })
            .catch((err) => {
              setLoading(false);
            });
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [user.id]);

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/details?id=${gig_id}`)
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
  }, [id]);

  return (
    <ImageBackgroundWrapper>
      <Container>
        {loading && (
          <center>
            <Spinner color="white" />
          </center>
        )}

        <div className="row m-0 p-0">
          <Card
            className="col-12 col-md-5 m-0 p-0"
            style={{
              orderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              // fontFamily: '"Gill Sans", sans-serif',
            }}
          >
            <CardHeader className="h5 text-center">{gigInfo.title}</CardHeader>
            <CardBody>
              <div className="container">
                {/* <p className="display-6 text-white">{gigInfo.title}</p> */}
                <p className="text-white">{gigInfo.description}</p>
                <div className="d-flex flex-direction">
                  <BsFillGeoAltFill size={18} color="white" className="me-2" />
                  <p className="text-white">{gigInfo.location}</p>
                </div>
                {/* </div> */}
                <div className="d-flex flex-direction">
                  <BsCalendar2Event color="white" size={18} className="me-2" />
                  <p className="text-white">
                    Casting Start : {gigInfo.gig_date}
                  </p>
                </div>
                <div className="d-flex flex-direction">
                  <BsCalendar2Event color="white" size={18} className="me-2" />

                  <p className="text-white">
                    Casting Ends : {gigInfo.reg_end_date}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card
            className=" col-12 col-md-6 m-0 mx-md-1 p-0"
            style={{
              orderRadius: "0",
              border: "none",
              backgroundColor: "rgba(127, 205, 218, 0.1)",
              color: "white",
              // fontFamily: '"Gill Sans", sans-serif',
            }}
          >
            <CardHeader className="h5 text-center">Applicant Info</CardHeader>
            <CardBody>
              <Row>
                <div className="col-4">
                  <img
                    src={applicantProfile.cover_image}
                    className="img-fluid"
                  />
                </div>
                <Col>
                  <p>
                    Name:{" "}
                    <b>
                      {applicantProfile.firstname} {applicantProfile.lastname},
                      ({applicantProfile.preferred_name},{" "}
                      {applicantProfile.gender},{" "}
                      {getAgeFromDOB(applicantProfile.dob)})
                    </b>
                  </p>
                  <div className="d-flex flex-direction">
                    <BsFillGeoAltFill
                      size={18}
                      color="white"
                      className="me-2 mt-1"
                    />
                    <p className="text-white">
                      {applicantProfile.state}, {applicantProfile.country}
                    </p>
                  </div>
                  <CustomButton onClick={() => setMessageModalOpen(true)}>
                    <AiFillMessage /> Message
                  </CustomButton>
                  <CustomButton
                    className="ms-1"
                    onClick={() => setMessageModalOpen(true)}
                  >
                    <AiFillMessage /> Invite for interview
                  </CustomButton>
                </Col>
              </Row>
              <div className="">
                <hr />
                <p>
                  Speciality: <b>{applicantProfile.speciality}</b>
                </p>
                <p>
                  Services: <b>{applicantProfile.services}</b>
                </p>
                <p>
                  Proposal: <b>{proposalInfo.application_proposal}</b>
                </p>
              </div>

              <div>
                <hr />
                <h5>Physical Features</h5>
                <p>
                  Height: <b>{applicantProfile.height}</b>
                </p>
                <p>
                  Bust: <b>{applicantProfile.bust}</b>
                </p>
                <p>
                  Waist: <b>{applicantProfile.waist}</b>
                </p>
                <p>
                  Hips: <b>{applicantProfile.hips}</b>
                </p>
                <p>
                  Shoes: <b>{applicantProfile.shoes}</b>
                </p>
                <p>
                  Shape: <b>{applicantProfile.shape}</b>
                </p>
                <p>
                  Complexion: <b>{applicantProfile.complexion}</b>
                </p>
                <p>
                  Hair color: <b>{proposalInfo.hair_color}</b>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <InviteMessage
          applicant_id={applicantProfile.id}
          isOpen={messageModalOpen}
          toggle={() => setMessageModalOpen((p) => !p)}
        />
        {/* <p className="text-white">{JSON.stringify(proposalInfo)}</p> */}
        {/* <p className="text-white">{JSON.stringify(applicantProfile)}</p> */}
      </Container>
    </ImageBackgroundWrapper>
  );
};
