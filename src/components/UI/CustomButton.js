import React from "react";
import { Button } from "reactstrap";
import { secondaryColor } from "../../variables";

function CustomButton(props) {
  return (
    <Button
      {...props}
      disabled={props.loading || props.disabled}
      // color={props.color || "warning" }
      // style={{color:"white"}}
      style={{ border: `1px solid ${secondaryColor}`,background: `${secondaryColor}`,color:"white", ...props.style }}

    >
      {props.loading && (
        <span
          className="spinner-border spinner-border-sm mr-2"
          role="status"
          aria-hidden="true"
        />
      )}
      {props.children}
    </Button>
  );
}

export default CustomButton;
