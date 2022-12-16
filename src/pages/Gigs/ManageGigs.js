import moment from "moment";
import { useEffect, useState } from "react";
import { FaExclamation, FaExclamationCircle, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Container,
  Spinner,
  Table,
} from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import { fetchApi } from "../../redux/actions/api";

export default (props) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/my-gigs/${user.id}/draft`)
      .then((resp) => {
        setLoading(false);
        if (resp.data && resp.data.length) {
          setDrafts(resp.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [user.id]);

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/my-gigs/${user.id}/active`)
      .then((resp) => {
        setLoading(false);
        if (resp.data && resp.data.length) {
          setList(resp.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, [user.id]);

  return (
    <ImageBackgroundWrapper>
      <Container className="p-2">
        <div className="d-flex flex-direction-row justify-content-end">
          <CustomButton
            color="dark"
            className=""
            onClick={() => navigate("/create-gig")}
          >
            <FaPlus color="white" size={16} className="mr-2" /> Create a gig
          </CustomButton>
        </div>

        {loading && (
          <center>
            <Spinner color="white" />
          </center>
        )}

        <Card
          style={{
            border: "none",
            backgroundColor: "rgba(127, 205, 218, 0.1)",
            color: "white",
            fontFamily: '"Gill Sans", sans-serif',
          }}
          className="my-2"
        >
          <CardHeader tag={"h5"}>Gigs Posted</CardHeader>
          <CardBody style={{ height: "45vh", overflow: "scroll" }}>
            {list.map((it, i) => (
              <div
                key={i}
                className="row shadow border border-dark rounded p-2 my-1"
              >
                <div className="col-10">
                  <h6>{it.title}</h6>
                  <p>{it.description}</p>
                  <span>Posted: {moment(it.created_at).fromNow()}</span>
                </div>
                <div className="col-2">
                  <CustomButton
                    color="light"
                    className="m-1"
                    size="sm"
                    onClick={() => navigate(`/manage-gigs/view/${it.id}`)}
                  >
                    View
                  </CustomButton>
                </div>
              </div>
            ))}
            {list.length ? null : (
              <EmptyListComponent message="You have not created a gig at this time, create a gig to get started" />
            )}
          </CardBody>
        </Card>

        <Card
          style={{
            border: "none",
            backgroundColor: "rgba(127, 205, 218, 0.1)",
            color: "white",
            fontFamily: '"Gill Sans", sans-serif',
          }}
          className="my-2"
        >
          <CardHeader tag={"h5"}>Your Drafts</CardHeader>
          <CardBody className="" style={{ height: "45vh", overflow: "scroll" }}>
            {drafts.map((it, i) => (
              <div key={i}>
                <div
                  key={i}
                  className="row shadow border border-dark rounded p-2 my-1"
                >
                  <div className="col-10">
                    <h6>{it.title}</h6>
                    <p>{it.description}</p>
                    <span>Saved: {moment(it.created_at).fromNow()}</span>
                  </div>
                  <div className="col-2">
                    <CustomButton
                      color="light"
                      className="m-1"
                      size="sm"
                      onClick={() => navigate(`/manage-gigs/edit/${it.id}`)}
                    >
                      Edit
                    </CustomButton>
                    <CustomButton
                      color="danger"
                      className="m-1"
                      size="sm"
                      onClick={() => {}}
                    >
                      Delete
                    </CustomButton>
                  </div>
                </div>
              </div>
            ))}
            {drafts.length ? null : (
              <EmptyListComponent message="You do not have any saved gigs at this time, create a gig to get started" />
            )}
          </CardBody>
        </Card>

        {/* <Table size="sm" responsive bordered className="my-2">
          <thead>
            <tr>
              <th className="text-white text-center">S/N</th>
              <th className="text-white text-center">Date</th>
              <th className="text-white text-center">Title</th>
              <th className="text-white text-center">Applied</th>
              <th className="text-white text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((l, i) => (
              <tr key={i}>
                <td className="text-white text-center">{i + 1}</td>
                <td className="text-white">{l.gig_date}</td>
                <td className="text-white">{l.title}</td>
                <td className="text-white text-center">{l.applied_no}</td>
                <td className="text-white text-center">
                  <CustomButton
                    color="light"
                    size="sm"
                    onClick={() => navigate(`/manage-gigs/view/${l.id}`)}
                  >
                    View
                  </CustomButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> */}

        {list.length ? null : (
          <Alert className="text-center" color="light">
            <FaExclamationCircle size={40} className="mb-2" />
            <p>
              You have not created a gig yet, click on the "Create Gig" button
              to get started.
            </p>
          </Alert>
        )}
      </Container>
    </ImageBackgroundWrapper>
  );
};

export function EmptyListComponent({ message = "" }) {
  return (
    <Alert className="text-center" color="dark">
      <FaExclamationCircle size={25} />
      <p>{message}</p>
    </Alert>
  );
}
