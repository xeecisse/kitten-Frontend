import { useEffect, useState } from "react";
import { FaExclamation, FaExclamationCircle, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Alert, Container, Spinner, Table } from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import ImageBackgroundWrapper from "../../components/UI/ImageBackgroundWrapper";
import bg_2 from "../../img/bg_2.jpg";
import { fetchApi } from "../../redux/actions/api";

export default (props) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchApi(`gigs/my-gigs/${user.id}`)
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
      <Container>
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

        <Table size="sm" responsive bordered className="my-2">
          <thead>
            <tr>
              <th className="text-white text-center">S/N</th>
              <th className="text-white text-center">Date</th>
              <th className="text-white text-center">Title</th>
              <th className="text-white text-center">Applied</th>
              {/* <th className="text-white text-center">Invited</th> */}
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
                {/* <td className="text-white text-center">{l.invited_no}</td> */}
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
        </Table>

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
