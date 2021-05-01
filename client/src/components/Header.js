import React from "react";
import { Container } from "react-bootstrap";

import "./Header.css";
const Header = () => {
  return (
    <div className="text-center">
      <h1>PALINDROME CHECKER</h1>
      <p>
        a word, phrase, or sequence that reads the same backward as forward,
        e.g., madam or nurses run.
      </p>
      <hr />
    </div>
  );
};

export default Header;
