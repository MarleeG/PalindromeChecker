import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import InputField from "./InputField";

import "./Base.css";
const Base = () => {
  return (
    <div className="my-5 base">
      <Container>
        <Header />
        <InputField />

        
      </Container>
    </div>
  );
};

export default Base;
