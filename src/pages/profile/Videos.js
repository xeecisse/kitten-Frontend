import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Col, Row, Spinner } from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import model_image from "../../img/bg_5.jpg";
import { fetchApi } from "../../redux/actions/api";
import VideoUpload from "./components/VideoUploads";

export default ({ notSelf = true, profileInfo = {} }) => {
  //   const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [videoUploadModalIsopen, setVideoModalIsOpen] = useState();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchApi(`get-media?user_id=${profileInfo.id}&resource_type=videos`)
      .then((resp) => {
        setLoading(false);
        console.log(resp);
        if (resp.success) {
          setVideoList(resp.data);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [profileInfo.id]);

  return (
    <div>
      {notSelf ? null : (
        <div className="d-flex flex-direction-row justify-content-center my-1 mt-3">
          <CustomButton color="dark" onClick={() => setVideoModalIsOpen(true)}>
            Upload Videos
          </CustomButton>
        </div>
      )}
      {/* <h3 className="text-center">Photos</h3> */}

      {loading && (
        <center className="my-2">
          <Spinner color="white" />
        </center>
      )}

      {videoList.length ? null : (
        <p className="text-center my-2 nop">
          No video found, check back later
        </p>
      )}

      <Row className="d-flex flex-row flex-wrap">
        {videoList.map((vid, i) => (
          <div
            className="col-12 my-2 embed-responsive embed-responsive-4by3"
            key={i}
          >
            {/* <img src={model_image} className='img-fluid rounded' /> */}
            <video
              controls
              className="embed-responsive-item"
              style={{ width: "100%" }}
            >
              <source src={vid.cloud_url} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        ))}
      </Row>

      <VideoUpload
        isOpen={videoUploadModalIsopen}
        toggle={() => setVideoModalIsOpen((p) => !p)}
      />
    </div>
  );
};
