import { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import model_image from "../../img/bg_5.jpg";
import { fetchApi } from "../../redux/actions/api";
import VideoUpload from "./components/VideoUploads";

export default () => {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [videoUploadModalIsopen, setVideoModalIsOpen] = useState();
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchApi(`get-media?user_id=${user.id}&resource_type=videos`)
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
  }, []);

  return (
    <div>
      <div className="d-flex flex-direction-row justify-content-end my-1">
        <CustomButton color="dark" onClick={() => setVideoModalIsOpen(true)}>
          <FaUpload /> Upload Videos
        </CustomButton>
      </div>
      {/* <h3 className="text-center">Photos</h3> */}

      {videoList.length ? null : <p className="text-center text-white">
              No video found, check back later</p>}

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
