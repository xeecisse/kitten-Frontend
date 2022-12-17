import moment from "moment";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row,
  Spinner,
} from "reactstrap";
import { primaryColor } from "../../Colors/Colors";
import CollapsibleCard from "../../components/UI/CollapsibleCard";
import CustomButton from "../../components/UI/CustomButton";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import Tab from "../../components/UI/tab/index";
import { fetchApi } from "../../redux/actions/api";

export const transparentCardStyle = {

};

export default (props) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [activeGigs, setActiveGigs] = useState([]);
  const [pendingInvitation, setPendingInvitation] = useState([]);
  const [pendingProposals, setPendingProposals] = useState([]);

  // fetch all active gigs
  useEffect(() => {
    setLoading(true);
    fetchApi(`proposals/my-proposals/${user.id}/active`)
      .then((resp) => {
        setLoading(false);
        if (resp && resp.data) {
          setActiveGigs(resp.data);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [user.id]);

  // fetch all pending proposals
  useEffect(() => {
    // alert("hello");
    setLoading(true);
    fetchApi(`proposals/my-proposals/${user.id}/pending`)
      .then((resp) => {
        setLoading(false);
        if (resp && resp.data) {
          setPendingProposals(resp.data);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [user.id]);

  // fetch all pending proposals
  useEffect(() => {
    // alert("hello");
    setLoading(true);
    fetchApi(`proposals/my-proposals/${user.id}/Invite Sent`)
      .then((resp) => {
        setLoading(false);
        if (resp && resp.data) {
          setPendingInvitation(resp.data);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [user.id]);

  return (
    <div>
      <div className="text-center">
        {loading && <Spinner />}
      </div>
      <Row className="m-0 p-0 mt-4">
        <Col md={4}>
          {/* <CollapseCard
            isOpen={true}
            title="Ongoing Gigs"
            badge={activeGigs.length.toString()}
          > */}
           <Card className="p-3 gig_card shadow">
            <h6 className="mb-4">Ongoing Gigs <Badge>{activeGigs.length.toString()}</Badge></h6>
            {activeGigs.map((it, i) => (
              <div key={i}>
                <Row
                  key={i}
                >
                  <Col md={9} style={{ borderRight: '1px solid rgb(218, 218, 218)' }}>
                    <h6>{it.title}</h6>
                    <p>{it.description}</p>
                    <span>{moment(it.created_at).fromNow()}</span>
                  </Col>
                  <Col md={3}>
                    <CustomButton
                      color=""
                      className="m-1"

                      onClick={() => navigate(`/manage-gigs/view/${it}`)}
                    >
                      View
                    </CustomButton>
                  </Col>
                </Row>
              </div>
            ))}
            </Card>
          {/* </CollapseCard> */}
        </Col>
        <Col md={4}>

          {/* <CollapseCard
            isOpen={false}
            title="Pending Invitations"
            badge={pendingInvitation.length.toString()}
          > */}
          <Card className="p-3 gig_card shadow">
            <h6 className="mb-4">Pending Invitation <Badge>{pendingInvitation.length.toString()}</Badge></h6>
            {pendingInvitation.map((it, i) => (
              <div key={i}>
                <Row
                  key={i}
                >
                  <Col md={9} style={{ borderRight: '1px solid rgb(218, 218, 218)' }}>
                    <h6>{it.title}</h6>
                    <p>{it.description}</p>
                    <span>{moment(it.created_at).fromNow()}</span>
                  </Col>
                  <Col md={3}>
                    <CustomButton
                      color=""
                      className="m-1"

                      onClick={() => navigate(`/manage-gigs/view/${it}`)}
                    >
                      View
                    </CustomButton>
                  </Col>
                </Row>
              </div>
            ))}
          </Card>
          {/* </CollapseCard> */}
        </Col>
        <Col md={4}>
          {/* <CollapseCard
            isOpen={false}
            title="Pending Gig Applications"
            badge={pendingProposals.length.toString()}
          > */}
          <Card className="p-3 gig_card shadow">
            <h6 className="mb-4">Pending Gig Application <Badge>{pendingProposals.length.toString()}</Badge></h6>
            {/* <hr/> */}
            {pendingProposals.map((it, i) => (
              <div key={i} className='mb-3'>
                <Row
                  key={i}
                >
                  <Col md={9} style={{ borderRight: '1px solid rgb(218, 218, 218)' }}>
                    <h6 style={{ color: primaryColor }}>{it.title}</h6>
                    <p>{it.description}</p>
                    <span style={{ fontSize: 12 }}>{moment(it.created_at).fromNow()}</span>
                  </Col>
                  <Col md={3}>
                    <CustomButton
                      color=""
                      className="m-1 text-white"

                      onClick={() => navigate(`/manage-gigs/view/${it}`)}
                    >
                      View
                    </CustomButton>
                  </Col>
                </Row>
              </div>
            ))}
          </Card>

          {/* </CollapseCard> */}
        </Col>
      </Row>

      {/* </>
        <>
          <h1>sadfasdf</h1>
        </>
      </Tab> */}
    </div>

  );
};

export function CollapseCard(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);
  const toggle = () => setIsOpen((p) => !p);

  return (
    <Card className="my-2 shadow" style={{ borderRadius: 15, border: 'none' }}>
      <CardHeader
        onClick={() => toggle((d) => !d)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          //   height: 40,
        }}
        className="d-flex flex-direction-row justify-content-between py-1 gigs_header"
      >
        <span className="mr-2 text-dark" style={{ fontSize: 16 }}>
          {props.title} {props.badge ? <Badge className="badge">{props.badge}</Badge> : null}
        </span>

        <>
          {!isOpen ? (
            <FaChevronDown className="text-dark" />
          ) : (
            <FaChevronUp className="text-dark" />
          )}
        </>
      </CardHeader>
      <CardBody>
        <Collapse isOpen={isOpen}>{props.children}</Collapse>
      </CardBody>
    </Card>
  );
}
