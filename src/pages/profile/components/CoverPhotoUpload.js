import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Collapse,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import CustomButton from "../../../components/UI/CustomButton";
import { apiURL } from "../../../redux/actions/api";

export default function CoverPhotoUpload({
  isOpen = false,
  toggle = (f) => f,
}) {
  const profileInfo = useSelector((state) => state.auth.user);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);

  const handleFileUpload = ({ target: { files } }) => {
    setImage(files[0]);
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("cover_image", image);
    formData.append("user_id", profileInfo.id);

    fetch(`${apiURL}/profile/cover_image`, {
      method: "POST",
      body: formData,
    })
      .then((raw) => raw.json())
      .then((resp) => {
        setLoading(false);
        alert(resp.message);
        toggle();
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        alert(e.message);
      });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Upload Cover Image</ModalHeader>
        <ModalBody pb={6}>
          {/* {JSON.stringify(photos)} */}
          <FormGroup>
            <label>Select Cover Photo</label>
            <input
              className="form-control"
              type={"file"}
              onChange={handleFileUpload}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <CustomButton loading={loading} onClick={handleSubmit}>
            Submit
          </CustomButton>
        </ModalFooter>
      </Modal>
    </>
  );
}
