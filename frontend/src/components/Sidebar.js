import React from "react";
import { ReactComponent as Logout } from "../assets/logout.svg";
import { ReactComponent as Dashboard } from "../assets/dashboard.svg";
import { ReactComponent as TotalContacts } from "../assets/totalcontacts.svg";

function Sidebar() {
  console.log("rendering Sidebar.js");

  function logOutHandler() {
    console.log("i ran");
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div id="sidebar-container">
      <div id="sidebar-top-menu">
        <h1 style={{ color: "#0884FF" }}>Logo</h1>
        <Dashboard />
        <TotalContacts />
      </div>
      <div
        id="sidebar-logout"
        onClick={logOutHandler}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Logout />
        <p style={{ marginLeft: "5px" }}>Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;
