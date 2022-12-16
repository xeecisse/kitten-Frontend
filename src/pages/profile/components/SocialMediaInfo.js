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

export default function SocialMediaInfo({
  isOpen = false,
  toggle = (f) => f,
  form = {},
  handleChange = (f) => f,
}) {
  return (
    <Collapsible title="Social Media" isOpen={isOpen} toggle={toggle}>
      <FormGroup mt={4}>
        <label>Facebook Username</label>
        <Input
          placeholder="johndoe1"
          name="facebook"
          value={form.facebook}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup mt={4}>
        <label>Instagram Username</label>
        <Input
          placeholder="johndoe1"
          name="instagram"
          value={form.instagram}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup mt={4}>
        <label>Twitter Username</label>
        <Input
          placeholder="johndoe1"
          name="twitter"
          value={form.twitter}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup mt={4}>
        <label>Website</label>
        <Input
          placeholder="agency.com"
          name="website"
          value={form.website}
          onChange={handleChange}
        />
      </FormGroup>
    </Collapsible>
  );
}
