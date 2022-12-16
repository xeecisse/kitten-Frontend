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
import { COMPLEXIONS, HAIR_COLORS, SHAPES } from "../../../utils/constants";
import Collapsible from "./Collapsible";

export default function AppearanceInfo({
  isOpen = false,
  toggle = (f) => f,
  form = {},
  handleChange = (f) => f,
}) {
  return (
    <Collapsible title="Physical" isOpen={isOpen} toggle={toggle}>
      <FormGroup>
        <label>Height (cm)</label>
        <Input
          placeholder="11"
          name="height"
          value={form.height}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>Waist (cm)</label>
        <Input
          placeholder="50"
          name="waist"
          value={form.waist}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup mt={4}>
        <label>Bust (cm)</label>
        <Input
          placeholder="12"
          name="bust"
          value={form.bust}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup mt={4}>
        <label>Hips (cm)</label>
        <Input
          placeholder="20"
          name="hips"
          value={form.hips}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup mt={4}>
        <label>Shoes (EU)</label>
        <Input
          placeholder="20"
          name="shoes"
          value={form.shoes}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup mt={4}>
        <label>Hair Color</label>
        <select
          className="form-control"
          name="hair_color"
          value={form.hair_color}
          onChange={handleChange}
        >
          <option>--Select--</option>
          {HAIR_COLORS.map((i, ix) => (
            <option key={ix} value={i}>
              {i}
            </option>
          ))}
        </select>
      </FormGroup>
      <FormGroup mt={4}>
        <label>Complexion</label>
        <select
          className="form-control"
          name="complexion"
          value={form.complexion}
          onChange={handleChange}
        >
          <option>--Select--</option>
          {COMPLEXIONS.map((i, ix) => (
            <option key={ix} value={i}>
              {i}
            </option>
          ))}
        </select>
      </FormGroup>
      <FormGroup mt={4}>
        <label>Shape</label>
        <select
          className="form-control"
          value={form.shape}
          name="shape"
          onChange={handleChange}
        >
          <option>--Select--</option>
          {SHAPES.map((i, ix) => (
            <option key={ix} value={i}>
              {i}
            </option>
          ))}
        </select>
      </FormGroup>
    </Collapsible>
  );
}
