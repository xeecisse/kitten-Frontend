import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
// import { secondaryColor } from "../../variables";

function SelectInput(props) {
  const { label, options, className, container, required } = props;
  return (
    <FormGroup className={container}>
      {label && label !== "" ? (
        <>
          <Label className="fw-bold">{label}</Label>
          {required && <span className="text-danger">*</span>}
        </>
      ) : null}
      <select
        // type="select"
        className={`form-control ${className}`}
        // style={{ border: `1px solid ${}`, ...props.style }}
        {...props}
      >
        <option>--select--</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </FormGroup>
  );
}

export default SelectInput;
