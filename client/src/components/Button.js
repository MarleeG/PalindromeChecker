import React from "react";

import "./Button.css";
const Button = (props) => {
  const { disabled } = props;
  return (
    <button type="submit" className="text-center button my-3" disabled={disabled}>
      check palindrome
    </button>
  );
};

export default Button;
