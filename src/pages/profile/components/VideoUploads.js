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

export default function VideoUpload({ isOpen = false, toggle = (f) => f }) {
  const profileInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(profileInfo);
  const [videos, setVideos] = useState([]);

  const handleFileUpload = ({ target: { files } }) => {
    setVideos(files);
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    Object.values(videos).forEach((i) => formData.append("videos", i));
    formData.append("user_id", profileInfo.id);

    fetch(`${apiURL}/profile/videos`, {
      method: "POST",
      body: formData,
    })
      .then((raw) => raw.json())
      .then((resp) => {
        setLoading(false);
        alert(resp.message);
        // dispatch({ type: SET_PROFILE, payload: resp.user });
        // setForm(resp.user);
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
        <ModalHeader toggle={toggle}>Upload Videos</ModalHeader>
        <ModalBody pb={6}>
          <FormGroup>
            <label>Select Videos</label>
            <input
              className="form-control"
              type={"file"}
              multiple
              onChange={handleFileUpload}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <CustomButton color="dark" loading={loading} onClick={handleSubmit}>
            Submit
          </CustomButton>
        </ModalFooter>
      </Modal>
    </>
  );
}
