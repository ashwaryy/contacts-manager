import React from "react";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="Landing">
        <div className="heading">
          <h1>Contacts Manager</h1>
        </div>
        <div className="btn">
          <button type="submit">
            <a href="/main">Click to Start..</a>
          </button>
        </div>
        <p>
          Not a user? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
export default LandingPage;
