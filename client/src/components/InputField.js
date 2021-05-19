import React, { useState, useEffect, useRef, Fragment } from "react";
import { Form } from "react-bootstrap";
import Button from "./Button";

import "./InputField.css";
const InputField = () => {
  const [inputFieldVal, setInputFieldVal] = useState("");
  const [palindrome, setPalindrome] = useState(false);
  const [showPalindromeResults, setShowPalindromeResults] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // palindrome-results-container
  const palindromeResultsContainer = React.createRef();

  // this function has a linear algorithm which will determine if the value in the input field is a palindrome
  const isPalindrome = (val) => {
    let sequence = val.replace(" ", "").toLowerCase().trim();
    console.log(sequence);

    let reverseCharIdx = sequence.length - 1;

    for (let i = 0; i < sequence.length / 2 + 1; i++) {
      if (sequence[i] !== sequence[reverseCharIdx]) {
        setPalindrome(false);
        return false;
      }

      reverseCharIdx--;
    }

    return true;
  };

  // this function will update the input's value on each key stroke
  const handleChange = (e) => {
    const { value } = e.target;
    setInputFieldVal(value);
    showPalindromeResults && setShowPalindromeResults(false);

    refresh && setRefresh(false);
  };

  // this will execute a few functions when the user clicks on the "CHECK PALINDROME" button
  const handleSubmit = (e) => {
    // This will prevent the default behaviour of the browser when a form is submittted.
    e.preventDefault();

    // the setPalindrome function will set palindrome to true or false if the word/phrase is an palindrome
    setPalindrome(isPalindrome(inputFieldVal));

    // the palindrome results will be shown once the user submits the form.
    // a minimum of 2 characters must be in the input field in order to submit the form
    setShowPalindromeResults(true);

    setRefresh(true);
  };

  useEffect(() => {
    refresh &&
      palindromeResultsContainer.current.scrollIntoView({ behavior: "smooth" });
  }, [refresh]);

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="inputField">
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
          <p ref={palindromeResultsContainer}>
            {palindrome ? (
              <Fragment>
                <strong className="text-inputted-palindrome-check g-font-amatic">
                  {inputFieldVal}
                </strong>{" "}
                is a palindrome.
              </Fragment>
            ) : (
              <Fragment>
                <strong className="text-inputted-palindrome-check g-font-amatic">
                  {inputFieldVal}
                </strong>{" "}
                is not a palindrome.
              </Fragment>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default InputField;
