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
import Collapsible from "./Collapsible";

export default function BasicInfo({
  isOpen = false,
  toggle = (f) => f,
  form = {},
  handleChange = (f) => f,
}) {
  return (
    <Collapsible title="Personal" isOpen={isOpen} toggle={toggle}>
      <FormGroup>
        <label>Preferred name</label>
        <Input
          placeholder="Preferred name"
          name="preferred_name"
          value={form.preferred_name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>First name</label>
        <Input
          placeholder="First name"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup mt={4}>
        <label>Last name</label>
        <Input
          placeholder="Last name"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup mt={4}>
        <label>Other name</label>
        <Input
          placeholder="Other name"
          name="othername"
          value={form.othername}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup mt={4}>
        <label>Date of birth</label>
        <Input
          name="dob"
          type="date"
          value={form.dob}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup mt={4}>
        <label>Gender</label>
        <select
          className="form-control"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option>--Select--</option>
          <option value={"Male"}>Male</option>
          <option value={"Female"}>Female</option>
          <option value={"Prefer not to mention"}>Prefer not to mention</option>
        </select>
      </FormGroup>
    </Collapsible>
  );
}
