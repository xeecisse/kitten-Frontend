import React from 'react'
import {
  Button,
  Collapse,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import Collapsible from './Collapsible'
import { countryList } from './countryList'

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
          {countryList.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
          {/* <option value={"Nigeria"}>Nigeria</option> */}
        </select>
      </FormGroup>
      {form.country === 'Nigeria' ? (
        <>
          <FormGroup mt={4}>
            <label>State</label>
            <select
              className="form-control"
              name="state"
              value={form.state}
              onChange={handleChange}
            >
              <option>--Select--</option>
              <option value={'Kano'}>Kano</option>
              <option value={'Abuja'}>Abuja</option>
            </select>
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
              <option value={'Kura'}>Kura</option>
              <option value={'Nassarawa'}>Nassarawa</option>
            </select>
          </FormGroup>
        </>
      ) : null}
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
  )
}
