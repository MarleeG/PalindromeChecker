import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <div className="header text-center">
      <h1 className="g-font-amatic">PALINDROME CHECKER</h1>
      <p>
       A palindrome is a word, phrase, number, or sequence of characters that reads the same backward and forward, ignoring spaces, punctuation, and capitalization. Examples include <span className="palindrome-example-words">madam</span>, <span className="palindrome-example-words">racecar</span>, and <span className="palindrome-example-words">nurses run</span>.
      </p>
      <hr />
    </div>
  );
};

export default Header;
