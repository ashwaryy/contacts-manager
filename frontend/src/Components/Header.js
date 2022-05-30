import React from "react";
import { ReactComponent as SuperAdmin } from "../assets/superadmin.svg";
function Header() {
  return (
    <div id="header-container">
      <h2>Total Contacts</h2>
      <input
        id="header-search"
        type="text"
        placeholder="Search by Email Id...."
      />
      <SuperAdmin style={{ marginRight: "15px" }} id="justforclicks" />
    </div>
  );
}

export default Header;
