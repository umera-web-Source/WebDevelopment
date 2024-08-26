import React from "react";
import logo from "./Images/CrickbusterMiniLogo.png"; // Import your logo image

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spinner"></div>
        <img src={logo} alt="Logo" className="loader-logo" />
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
