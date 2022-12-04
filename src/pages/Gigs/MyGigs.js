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
  Collapse,
  Spinner,
} from "reactstrap";
import CollapsibleCard from "../../components/UI/CollapsibleCard";
import CustomButton from "../../components/UI/CustomButton";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import Tab from "../../components/UI/tab/index";
import { fetchApi } from "../../redux/actions/api";

export const transparentCardStyle = {
  borderRadius: "0",
  border: "none",
  backgroundColor: "rgba(127, 205, 218, 0.1)",
  color: "white",
  fontFamily: 'font-family: "Gill Sans", sans-serif;',
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
    <ImageBackgroundWrapper>
      {loading && <Spinner color="white" />}

      {/* <Tab tabs={["List", "Archive"]}>
        <> */}
      <CollapseCard
        isOpen={true}
        title="Ongoing Gigs"
        badge={activeGigs.length.toString()}
      >
        {activeGigs.map((it, i) => (
          <div key={i}>
            <div
              key={i}
              className="row shadow border border-light rounded p-2 my-1"
            >
              <div className="col-10">
                <h6>{it.title}</h6>
                <p>{it.description}</p>
                <span>{moment(it.created_at).fromNow()}</span>
              </div>
              <div className="col-2">
                <CustomButton
                  color="light"
                  className="m-1"
                  size="sm"
                  onClick={() => navigate(`/manage-gigs/view/${it}`)}
                >
                  View
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </CollapseCard>
      <CollapseCard
        isOpen={false}
        title="Pending Invitations"
        badge={pendingInvitation.length.toString()}
      >
        {pendingInvitation.map((it, i) => (
          <div key={i}>
            <div
              key={i}
              className="row shadow border border-light rounded p-2 my-1"
            >
              <div className="col-10">
                <h6>{it.title}</h6>
                <p>{it.description}</p>
                <span>{moment(it.created_at).fromNow()}</span>
              </div>
              <div className="col-2">
                <CustomButton
                  color="light"
                  className="m-1"
                  size="sm"
                  onClick={() => navigate(`/manage-gigs/view/${it}`)}
                >
                  View
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </CollapseCard>
      <CollapseCard
        isOpen={false}
        title="Pending Gig Applications"
        badge={pendingProposals.length.toString()}
      >
        {pendingProposals.map((it, i) => (
          <div key={i}>
            <div
              key={i}
              className="row shadow border border-light rounded p-2 my-1"
            >
              <div className="col-10">
                <h6>{it.title}</h6>
                <p>{it.description}</p>
                <span>{moment(it.created_at).fromNow()}</span>
              </div>
              <div className="col-2">
                <CustomButton
                  color="light"
                  className="m-1"
                  size="sm"
                  onClick={() => navigate(`/manage-gigs/view/${it}`)}
                >
                  View
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </CollapseCard>

      {/* </>
        <>
          <h1>sadfasdf</h1>
        </>
      </Tab> */}
    </ImageBackgroundWrapper>
  );
};

export function CollapseCard(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen || false);
  const toggle = () => setIsOpen((p) => !p);

  return (
    <Card style={transparentCardStyle} className="my-2">
      <CardHeader
        onClick={() => toggle((d) => !d)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          //   height: 40,
        }}
        className="d-flex flex-direction-row justify-content-between py-1"
      >
        <span className="mr-2 text-white" style={{ fontSize: 16 }}>
          {props.title} {props.badge ? <Badge>{props.badge}</Badge> : null}
        </span>

        <>
          {!isOpen ? (
            <FaChevronDown className="text-white" />
          ) : (
            <FaChevronUp className="text-white" />
          )}
        </>
      </CardHeader>
      <CardBody>
        <Collapse isOpen={isOpen}>{props.children}</Collapse>
      </CardBody>
    </Card>
  );
}
