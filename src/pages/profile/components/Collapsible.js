import React from "react";
import { Collapse } from "reactstrap";
import {
  FaCheck,
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
  FaDashcube,
  FaDotCircle,
} from "react-icons/fa";

export default function Collapsible(props) {
  return (
    <>
      <div
        className="d-flex flex-direction-row align-items-center"
        style={{ cursor: "pointer" }}
        onClick={props.toggle}
      >
        {props.isOpen ? (
          <FaChevronRight className="me-1 mb-2" />
        ) : (
          <FaDotCircle size={8} className="me-1 mb-2" />
        )}
        {props.isOpen ? <h5>{props.title}</h5> : <h6>{props.title}</h6>}
        {/* {props.isOpen ? <FaChevronUp /> : <FaChevronDown />} */}
      </div>
      <Collapse isOpen={props.isOpen}>
        <>{props.children}</>
      </Collapse>
    </>
  );
}
