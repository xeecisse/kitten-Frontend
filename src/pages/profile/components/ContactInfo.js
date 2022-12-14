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
import SelectInput from "../../../components/UI/SelectInput";
import { states } from "../States";
import Collapsible from "./Collapsible";

export default function ContactInfo({
  isOpen = false,
  toggle = (f) => f,
  form = {},
  handleChange = (f) => f,
}) {
  return (
    <Collapsible title="Contact" isOpen={isOpen} toggle={toggle}>
      <FormGroup>
        <label>Email</label>
        <Input
          placeholder="Email address"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>Phone Number</label>
        <Input
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup mt={4}>
        <label>Country</label>
        <select
          className="form-control"
          value={form.country}
          onChange={handleChange}
          name="country"
        >
          <option>--Select--</option>
          <option value={"Nigeria"}>Nigeria</option>
        </select>
      </FormGroup>

      <FormGroup mt={4}>
        <label>State</label>
        <SelectInput
          className="form-control"
          name="state"
          value={form.state}
          onChange={handleChange}
          options={states}
        />
        {/* <option>--Select--</option>
          <option value={"Kano"}>Kano</option>
          <option value={"Abuja"}>Abuja</option>
          <option value={"Lagos"}>Lagos</option>
          <option value={"Kaduna"}>Kaduna</option>
          <option value={"Katsina"}>Katsina</option>
          <option value={"Edo"}>Edo</option>
          <option value={"Akwa-ibom"}>Akwa-ibom</option>
          <option value={"Bauchi"}>Bauchi</option>
          <option value={"Bayelsa"}>Bayelsa</option>
          <option value={"Benue"}>Benue</option>
          <option value={"Borno"}>Borno</option>
          <option value={"Cross-river"}>Cross-river</option>
          <option value={"Adamawa"}>Adamawa</option>
          <option value={"Adamawa"}>Adamawa</option>
          <option value={"Adamawa"}>Adamawa</option>
          <option value={"Adamawa"}>Adamawa</option>
          <option value={"Adamawa"}>Adamawa</option>
          <option value={"Adamawa"}>Adamawa</option>
          <option value={"Adamawa"}>Adamawa</option>
          <option value={"Adamawa"}>Adamawa</option> */}
      </FormGroup>

      <FormGroup mt={4}>
        <label>Local Govt.</label>
        <select
          className="form-control"
          name="lga"
          value={form.lga}
          onChange={handleChange}
        >
          <option>--Select--</option>
          <option value={"Kura"}>Kura</option>
          <option value={"Nassarawa"}>Nassarawa</option>
        </select>
      </FormGroup>

      <FormGroup mt={4}>
        <label>Contact Address</label>
        <Input
          type="textarea"
          placeholder="Enter your contact address"
          name="contact_add"
          value={form.contact_add}
          onChange={handleChange}
        />
      </FormGroup>
    </Collapsible>
  );
}
