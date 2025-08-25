import React from "react";

import "./ApplicationNote.css";
const ApplicationNote = () => {
  return (
    <div className="application-note g-font-amatic">
      This application was built by{" "}
      <a href="https://marleegerard.com" target="_blank" rel="noreferrer">
        <span className="app-creator-name">Marlee Gerard</span>
      </a>
    </div>
  );
};

export default ApplicationNote;
