import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <div className="header text-center">
      <h1 className="g-font-amatic">PALINDROME CHECKER</h1>
      <p>
        A word, phrase, or sequence that reads the same backward as forward,
        e.g., madam or nurses run.
      </p>
      <hr />
    </div>
  );
};

export default Header;
