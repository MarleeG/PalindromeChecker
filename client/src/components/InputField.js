import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "./Button";

import "./InputField.css";
const { log } = console;
const InputField = () => {
  const [inputFieldVal, setInputFieldVal] = useState("");
  const [palindrome, setPalindrome] = useState(false);

  const isPalindrome = (val) => {
    let sequence = val.replace(" ", "").toLowerCase();
    let reverseCharIdx = sequence.length - 1;

    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] !== sequence[reverseCharIdx]) {
        setPalindrome(false);
        return false;
      }

      reverseCharIdx--;
    }

    // setPalindrome(true);

    return true;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputFieldVal(value);


  };

  const handleClick = (e) => {
    e.preventDefault();

    setPalindrome(isPalindrome(inputFieldVal));

    // log();
  };

  useEffect(() => {
    // console.log(palindrome)
  }, []);

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
            className="g-font-montserrat input"
          />
        </Form.Group>

        <Button disabled={inputFieldVal.trim() === "" || inputFieldVal.length === 1} />
      </Form>

      <p className="text-center">
        {palindrome.toString()}
        {/* {palindrome ? `${inputFieldVal} is a palindrome.` : `${inputFieldVal} is not a palindrome.`} */}
      </p>
    </div>
  );
};

export default InputField;