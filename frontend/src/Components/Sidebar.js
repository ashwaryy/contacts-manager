import React from "react";
import './Sidebar.css'

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
        
        <div className="dash">
          <img src="./dash-img.png" alt="dashbord-img"/>
          <span>Dashboard</span>
        </div>

        <div className="ttl"> 
          <img src="./contactimg.png" alt="contact-img"/>
          <span>Total Contacts</span>
        </div>

      </div>

      <div id="sidebar-logout">    
         <div className="log">
          <img src="./logout-img.png" alt="logout img"/>
            <span onClick={logOutHandler} style={{ cursor: "pointer" }}>
            Logout
          </span>
         </div>
      </div>

    </div>
  );
}

export default Sidebar;
