import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "./Button";

import "./InputField.css";
const { log } = console;
const InputField = () => {
  const [inputFieldVal, setInputFieldVal] = useState("");
  const [palindrome, setPalindrome] = useState(false);
  const [showPalindromeResults, setShowPalindromeResults] = useState(false);

  const isPalindrome = (val) => {
    let sequence = val.replace(" ", "").toLowerCase().trim();
    // let sequence = val.toLowerCase();
    console.log(sequence);

    let reverseCharIdx = sequence.length - 1;

    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] !== sequence[reverseCharIdx]) {
        setPalindrome(false);
        return false;
      }

      reverseCharIdx--;
    }

    return true;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputFieldVal(value);
    showPalindromeResults && setShowPalindromeResults(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setPalindrome(isPalindrome(inputFieldVal));
    setShowPalindromeResults(true);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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

        <Button
          disabled={
            inputFieldVal.trim() === "" || inputFieldVal.trim().length === 1
          }
        />
      </Form>

      {showPalindromeResults && (
        <div className="text-center palindrome-results-container g-font-montserrat">
          {/* {palindrome.toString()} */}
          {palindrome ? (
            <p>
              <strong className="text-inputted-palindrome-check g-font-amatic">
                {inputFieldVal}
              </strong>{" "}
              is a palindrome.
            </p>
          ) : (
            <p>
              <strong className="text-inputted-palindrome-check g-font-amatic">
                {inputFieldVal}
              </strong>{" "}
              is not a palindrome.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;