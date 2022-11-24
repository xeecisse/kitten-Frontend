import { Col, Row, Spinner } from "reactstrap";
import model_image from "../../img/bg_1.jpg";
import model_image2 from "../../img/bg_5.jpg";
import model_image3 from "../../img/bg_2.jpg";
import model_image4 from "../../img/bg_3.jpg";
import model_image5 from "../../img/bg.jpg";
import model_image6 from "../../img/image_1.jpg";
import model_image7 from "../../img/image_2.jpg";
import ImageCard from "./ImageCard";
import "./grid.css";
import { useEffect, useState } from "react";
import CustomButton from "../../components/UI/CustomButton";
import { FaUpload } from "react-icons/fa";
import PhotoUpload from "./components/PhotoUpload";
import { fetchApi } from "../../redux/actions/api";
import { useSelector } from "react-redux";

export default () => {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [photoUploadModalIsOpen, setPhotoUploadModalIsOpen] = useState(false);
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchApi(`get-media?user_id=${user.id}&resource_type=photos`)
      .then((resp) => {
        setLoading(false);
        console.log(resp);
        if (resp.success) {
          setImagesList(resp.data);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const renderImages = imagesList.map((image, i) => {
    return <ImageCard key={i} image={image} />;
  });

  return (
    <div>
      <div className="d-flex flex-direction-row justify-content-end my-1">
        <CustomButton
          color="dark"
          onClick={() => setPhotoUploadModalIsOpen(true)}
        >
          <FaUpload /> Upload Photos
        </CustomButton>
      </div>

      {loading && (
        <center className="my-2">
          <Spinner color="white" />
        </center>
      )}

      {imagesList.length ? null : (
        <p className="text-center text-white">
          No image found, check back later
        </p>
      )}

      <div className="image-list">{renderImages}</div>
      {/* {JSON.stringify(imagesList)} */}
      <PhotoUpload
        isOpen={photoUploadModalIsOpen}
        onClose={() => setPhotoUploadModalIsOpen(false)}
        onOpen={() => setPhotoUploadModalIsOpen(true)}
      />
    </div>
  );
};
