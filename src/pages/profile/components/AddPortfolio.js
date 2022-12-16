import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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

export default function AddPortfolio({
  isOpen = false,
  toggle = (f) => f,
  profileInfo = {},
}) {
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

  useEffect(() => {
    setForm(profileInfo);
  }, [profileInfo.preferred_name]);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    setLoading(true);
    // const formData = new FormData();
    // formData.append("photos", photos);
    // formData.append("user_id", profileInfo.id);
    // updateApi("users/" + form.id, form)
    //   .then((resp) => {
    //     setLoading(false);
    //     alert("Profile updated successfully!");
    //     dispatch({ type: SET_PROFILE, payload: resp.user });
    //     setForm(resp.user);
    //     onClose();
    //   })
    //   .catch((e) => {
    //     setLoading(false);
    //     console.log(e);
    //     alert(e.message);
    //   });
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Add Portfolio</ModalHeader>
        <ModalBody pb={6}>
          <FormGroup>
            <label>Title</label>
            <Input
              placeholder="Portfolio Title"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Description</label>
            <Input
              type="textarea"
              placeholder="Portfolio description"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Date</label>
            <Input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Select cover photo</label>
            <input
              className="form-control"
              type={"file"}
              onChange={handleFileUpload}
            />
          </FormGroup>
          <FormGroup>
            <label>Add other files</label>
            <input
              className="form-control"
              type={"file"}
              multiple
              onChange={handleFileUpload}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <CustomButton color="dark" onClick={handleSubmit} loading={loading}>
            Submit
          </CustomButton>
          <CustomButton color="danger" onClick={toggle}>
            Cancel
          </CustomButton>
        </ModalFooter>
      </Modal>
    </>
  );
}
