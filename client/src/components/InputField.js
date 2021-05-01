import React from "react";
import { Container, Form, Button, Input } from "react-bootstrap";

import "./InputField.css";
const InputField = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter something special" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default InputField;
