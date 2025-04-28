import React from "react";
import { BpkCode } from "@skyscanner/backpack-web/bpk-component-code";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";

import Calendar from 'react-calendar';

const getClassName = cssModules(STYLES);

const calendarStyle = {
  width: "380px",
  maxWidth: "90%",
  background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
  border: "1px solid #e0e0e0",
  borderRadius: "16px",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
  padding: "1.5rem",
  margin: "2rem auto",
  transition: "all 0.3s ease",
  backdropFilter: "blur(10px)",
};


const App = () => (
  <div className={getClassName("App")}>
    <header className={getClassName("App__header")}>
      <div className={getClassName("App__header-inner")}>
        <BpkText
          tagName="h1"
          textStyle="xxl"
          className={getClassName("App__heading")}
        >
          Flight Schedule
        </BpkText>
      </div>
    </header>

    <main className={getClassName("App__main")}>
      <BpkText tagName="p" className={getClassName("App__text")}>
        To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
      </BpkText>

      {/* Styled Calendar */}
      <div style={calendarStyle}>
        <Calendar />
      </div>

      <BpkButton onClick={() => alert("It works!")}>Continue</BpkButton>
    </main>
  </div>
);

export default App;
