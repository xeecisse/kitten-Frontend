import moment from "moment";
import { useEffect, useState } from "react";
import { BsCalendar2Event, BsFillGeoAltFill } from "react-icons/bs";
import { FaExclamationCircle, FaPlus } from "react-icons/fa";
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
import bg_2 from "../../img/bg_2.jpg";
import { fetchApi } from "../../redux/actions/api";

export default (props) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const { id } = useParams();
  const [gigAppInfo, setGigAppInfo] = useState([]);
  const [gigInfo, setGigInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [applicantInfo, setApplicantInfo] = useState({});

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/gig-app-info/${id}`)
      .then((resp) => {
        setLoading(false);
        if (resp.data && resp.data.length) {
          setGigAppInfo(resp.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [user.id]);

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

  useEffect(() => {
    setLoading(true);
    fetchApi(`profile/details/${""}`)
      .then((resp) => {
        setLoading(false);
        if (resp.data && resp.data.length) {
          setApplicantInfo(resp.data[0]);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return (
    <ImageBackgroundWrapper>
      <Container>
        {loading && (
          <center>
            <Spinner color="white" />
          </center>
        )}

        <Card
          className="my-2"
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
              {/* <p className="display-6 text-white"></p> */}
              <p className="text-white">{gigInfo.description}</p>
              <div className="d-flex flex-direction">
                <BsFillGeoAltFill size={18} color="white" className="me-2" />
                <p className="text-white">{gigInfo.location}</p>
              </div>
              {/* </div> */}
              <div className="d-flex flex-direction">
                <BsCalendar2Event color="white" size={18} className="me-2" />
                <p className="text-white">Casting Start : {gigInfo.gig_date}</p>
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

        {/* <p className="text-white">{JSON.stringify(gigAppInfo)}</p> */}
        <Card
          className="my-2"
          style={{
            orderRadius: "0",
            border: "none",
            backgroundColor: "rgba(127, 205, 218, 0.1)",
            color: "white",
            // fontFamily: '"Gill Sans", sans-serif',
          }}
        >
          <CardHeader className="h5 text-center">
            List of submitted proposals
          </CardHeader>
          <CardBody>
            <div className="text-right">
              Total invites sent: {gigInfo.invited_no}
            </div>
            <Table size="sm" responsive bordered className="my-2">
              <thead>
                <tr>
                  <th className="text-white text-center">S/N</th>
                  {/* <th className="text-white text-center">Applicant ID</th> */}
                  <th className="text-white text-center">Applicant Name</th>
                  <th className="text-white text-center">Date Applied</th>
                  <th className="text-white text-center">Status</th>
                  <th className="text-white text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {gigAppInfo.map((l, i) => (
                  <tr key={i}>
                    <td className="text-white text-center">{i + 1}</td>
                    {/* <td className="text-white">{l.applicant_id}</td> */}
                    <td className="text-white">{l.applicant_name}</td>
                    <td className="text-white text-center">
                      {moment(l.application_date).format("DD/MM/YYYY")}
                    </td>
                    <td className="text-white text-center">
                      {l.application_status}
                    </td>
                    <td className="text-white text-center">
                      <CustomButton
                        color="light"
                        size="sm"
                        onClick={() =>
                          navigate(
                            `/manage-gigs/view-proposal/${l.id}?gig_id=${l.gig_id}`
                          )
                        }
                      >
                        View Proposal
                      </CustomButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>

        {gigAppInfo.length ? null : (
          <Alert className="text-center" color="light">
            <FaExclamationCircle size={40} className="mb-2" />
            <p>No applicant found for this gig.</p>
          </Alert>
        )}
      </Container>
    </ImageBackgroundWrapper>
  );
};
