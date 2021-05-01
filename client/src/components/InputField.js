import React, { useState } from "react";
import { Form } from "react-bootstrap";

import "./InputField.css";
const { log } = console;
const InputField = () => {
  const [inputFieldVal, setInputFieldVal] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    log(value);
    setInputFieldVal(value);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter something special"
            value={inputFieldVal}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default InputField;
