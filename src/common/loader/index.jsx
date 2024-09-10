import React from "react";
import "./loader.scss";
import logo from "../../assets/logo/header-logo.jpg";
export default function Loader() {
  return (
    <>
      <div className="loader">
        <div className="logo-container circle pulse">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
      </div>
      
    </>
  );
}
