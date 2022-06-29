import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export const Input = ({ type = "text", label = "", value = "", ...props }) => (
  <FloatingLabel label={label}>
    <Form.Control type={type} value={value} placeholder="..." className="input" {...props} />
  </FloatingLabel>
);
