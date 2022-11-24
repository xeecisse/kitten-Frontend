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
import CustomButton from "../../components/UI/CustomButton";
import { SET_PROFILE } from "../../redux/actions/actionTypes";
import { postApi, updateApi } from "../../redux/actions/api";
import BasicInfo from "./components/BasicInfo";
import ContactInfo from "./components/ContactInfo";
import AppearanceInfo from "./components/PhysicalInfo";
import ProfessionalInfo from "./components/ProfessionalInfo";
import SocialMediaInfo from "./components/SocialMediaInfo";

export default function UpdateProfile({
  isOpen = false,
  onOpen = (f) => f,
  onClose = (f) => f,
  profileInfo = {},
}) {
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [loading, setLoading] = useState(false);
  const [openedSection, setOpenedSection] = useState("Basic");
  const [form, setForm] = useState(profileInfo);

  useEffect(() => {
    setForm(profileInfo);
  }, [profileInfo.preferred_name]);

  const handleChange = ({ target: { name, value } }) =>
    setForm((p) => ({ ...p, [name]: value }));

  const handleSubmit = () => {
    setLoading(true);
    updateApi("users/" + form.id, form)
      .then((resp) => {
        setLoading(false);
        alert("Profile updated successfully!");
        dispatch({ type: SET_PROFILE, payload: resp.user });
        setForm(resp.user);
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
        <ModalHeader toggle={onClose}>
          Edit your profile information
        </ModalHeader>
        <ModalBody pb={6}>
          {/* {JSON.stringify(profileInfo)} */}
          <BasicInfo
            isOpen={openedSection === "Basic"}
            toggle={() => setOpenedSection("Basic")}
            form={form}
            handleChange={handleChange}
          />
          <ContactInfo
            isOpen={openedSection === "Contact"}
            toggle={() => setOpenedSection("Contact")}
            form={form}
            handleChange={handleChange}
          />
          <SocialMediaInfo
            isOpen={openedSection === "Social"}
            toggle={() => setOpenedSection("Social")}
            form={form}
            handleChange={handleChange}
          />
          <AppearanceInfo
            isOpen={openedSection === "Physical"}
            toggle={() => setOpenedSection("Physical")}
            form={form}
            handleChange={handleChange}
          />
          <ProfessionalInfo
            isOpen={openedSection === "Professional"}
            toggle={() => setOpenedSection("Professional")}
            form={form}
            handleChange={handleChange}
          />
        </ModalBody>

        <ModalFooter>
          <CustomButton
            loading={loading}
            color="success"
            mr={3}
            onClick={handleSubmit}
          >
            Save
          </CustomButton>
          <Button onClick={onClose} color="dark">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
