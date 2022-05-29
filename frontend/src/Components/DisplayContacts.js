import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./DisplayContacts.css";
import Table from "./Table";
function DisplayContacts() {
  return (
    <div id="display-contacts-main-container">
      <Sidebar />
      <div id="header-and-contact">
        <Header />
        <Table />
      </div>
    </div>
  );
}

export default DisplayContacts;
