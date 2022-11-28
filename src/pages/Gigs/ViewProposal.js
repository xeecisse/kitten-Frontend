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

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/app-info/${id}/`)
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

  return (
    <ImageBackgroundWrapper>
      <Container>
        {loading && (
          <center>
            <Spinner color="white" />
          </center>
        )}

        <div className="container">
          <p className="display-6 text-white">{gigInfo.title}</p>
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

            <p className="text-white">Casting Ends : {gigInfo.reg_end_date}</p>
          </div>
        </div>

        {/* <p className="text-white">{JSON.stringify(gigAppInfo)}</p> */}
      </Container>
    </ImageBackgroundWrapper>
  );
};
