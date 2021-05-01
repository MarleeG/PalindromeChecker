import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "./Button";

import "./InputField.css";
const { log } = console;
const InputField = () => {
  const [inputFieldVal, setInputFieldVal] = useState("");

  const isPalindrome = (val) => {
    let sequence = val.replace(" ", "").toLowerCase();
    let reverseCharIdx = sequence.length - 1;

    for (let i = 0; i < sequence.length; i++) {

      if (sequence[i] !== sequence[reverseCharIdx]) {
        return false;
      }

      reverseCharIdx--;
    }

    return true;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputFieldVal(value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    log(isPalindrome(inputFieldVal));
  };

  return (
    <div>
      <Form onSubmit={handleClick}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Enter something special"
            value={inputFieldVal}
            onChange={handleChange}
          />
        </Form.Group>

        <Button />
      </Form>
    </div>
  );
};

export default InputField;
