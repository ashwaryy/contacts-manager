import React from "react";

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
      <div id="sidebar-logout">
        <p onClick={logOutHandler} style={{ cursor: "pointer" }}>
          Logout
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
