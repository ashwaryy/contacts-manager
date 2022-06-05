import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImportCSV from "./components/ImportCSV";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import DisplayContacts from "./components/DisplayContacts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/import" element={<ImportCSV />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<DisplayContacts />} />
      <Route path="*" element={"Error"} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
