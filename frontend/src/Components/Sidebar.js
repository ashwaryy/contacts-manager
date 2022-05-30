import React from "react";
import { ReactComponent as Logout } from "../assets/logout.svg";
function Sidebar() {
  function logOutHandler() {
    console.log("i ran");
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div id="sidebar-container">
      <div>
        <h1>Logo</h1>
        <p>Dashboard</p>
        <p>Total Contacts</p>
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
