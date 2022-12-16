import React from "react";
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
// import AutoCompleteWithMultipleSelection from "../../../components/UI/AutoCompleteWithMultipleSelection";
import Collapsible from "./Collapsible";

export default function ProfessionalInfo({
  isOpen = false,
  toggle = (f) => f,
  form = {},
  handleChange = (f) => f,
}) {
  return (
    <Collapsible title="Professional" isOpen={isOpen} toggle={toggle}>
      {/* <p>{JSON.stringify(form)}</p> */}
      <FormGroup>
        <label>Bio</label>
        <Input
          type="textarea"
          placeholder="Add your bio"
          name="bio"
          value={form.bio}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>Speciality</label>
        <Input
          placeholder="Add your speciality"
          name="speciality"
          value={form.speciality}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup mt={4}>
        <label>Services (separated by ",")</label>
        {/* <AutoCompleteWithMultipleSelection /> */}
        <Input
          type="textarea"
          placeholder="Add your services"
          name="services"
          value={form.services}
          onChange={handleChange}
        />
      </FormGroup>

      {/* <FormGroup mt={4}>
        <label>Shape</label>
        <select className="form-control" name="shape" onChange={handleChange}>
          <option>--Select--</option>
          <option value={"Hour-glass"}>Hour-glass</option>
          <option value={"Straight"}>Straight</option>
        </select>
      </FormGroup> */}
    </Collapsible>
  );
}
