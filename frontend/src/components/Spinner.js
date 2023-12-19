import React from "react";
import { Spinner as Loader } from "react-bootstrap";

const spinnerStyle = {
  position: "absolute",
  top: "calc(50% - 1rem)",
  left: "calc(50% - 1rem)",
};

const Spinner = () => {
  return (
    <Loader style={spinnerStyle} animation="border" variant="primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </Loader>
  );
};

export default Spinner;
