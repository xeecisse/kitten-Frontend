import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import CustomButton from "../../components/UI/CustomButton";
import { apiURL, postApi } from "../../redux/actions/api";

export default function SubmitProposal({ isOpen = false, toggle = (f) => f }) {
  const { id } = useParams();
  const profileInfo = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(profileInfo);
  const [photos, setPhotos] = useState({});

  const handleFileUpload = ({ target: { files } }) => {
    console.log(files);
    setPhotos(files);
  };

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    setLoading(true);

    const formData = new FormData();
    Object.values(photos).forEach((i) => formData.append("polaroid", i));

    formData.append("application_proposal", form.application_proposal);
    formData.append("applicant_id", profileInfo.id);
    formData.append(
      "applicant_name",
      `${profileInfo.firstname} ${profileInfo.lastname}`
    );

    fetch(`${apiURL}/gigs/apply/${id}`, {
      method: "POST",
      body: formData,
    })
      .then((raw) => raw.json({}))
      .then((d) => {
        setLoading(false);
        alert(d.message);
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
        <ModalHeader toggle={toggle}>Apply for gig</ModalHeader>
        <ModalBody pb={6}>
          <Form>
            <FormGroup>
              <label>Proposal</label>
              <Input
                type="textarea"
                name="application_proposal"
                value={form.application_proposal}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>Select profile</label>
              <select
                className="form-control"
                name="profile"
                value={form.profile}
                onChange={handleChange}
              >
                <option>--Select--</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Polaroid/Photo</label>
              <input
                type="file"
                className="form-control"
                multiple
                onChange={handleFileUpload}
              />
            </FormGroup>
          </Form>

          <p>Boost Your Application</p>
          <div>
            <CustomButton color="warning">Use gigs credit</CustomButton>
          </div>
        </ModalBody>

        <ModalFooter>
          <CustomButton color="dark" loading={loading} onClick={handleSubmit}>
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
