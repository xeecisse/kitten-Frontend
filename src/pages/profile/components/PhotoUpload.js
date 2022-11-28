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
import { apiURL, postApi } from "../../../redux/actions/api";

export default function PhotoUpload({
  isOpen = false,
  onOpen = (f) => f,
  onClose = (f) => f,
}) {
  const profileInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(profileInfo);
  const [photos, setPhotos] = useState([]);

  const handleFileUpload = ({ target: { files } }) => {
    console.log(files);
    setPhotos(files);
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    Object.values(photos).forEach((i) => formData.append("photos", i));
    formData.append("user_id", profileInfo.id);

    fetch(`${apiURL}/profile/photos`, {
      method: "POST",
      body: formData,
    })
      .then((raw) => raw.json())
      .then((resp) => {
        setLoading(false);
        alert("Photos uploaded successfully!");
        // dispatch({ type: SET_PROFILE, payload: resp.user });
        // setForm(resp.user);
        onClose();
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
        onClose={onClose}
        toggle={onClose}
      >
        <ModalHeader toggle={onClose}>Upload Photos</ModalHeader>
        <ModalBody pb={6}>
          <FormGroup>
            <label>Select Photos</label>
            <input
              className="form-control"
              type={"file"}
              multiple
              onChange={handleFileUpload}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <CustomButton color='dark' loading={loading} onClick={handleSubmit}>
            Submit
          </CustomButton>
        </ModalFooter>
      </Modal>
    </>
  );
}
