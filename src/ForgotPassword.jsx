import React from "react";
import "./ForgotPassword.css"; 
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="forgot-password-page-container">
      <div className="forgot-password-form-container">
       
        <p className="forgot-password-instructions">
          Don't worry! Enter your email below and we will send you a link to change your password.
        </p>
        <div>
          <input
            type="email"
            className="forgot-password-input"
            placeholder="Email"
          />
        </div>
        <button className="forgot-password-button">Submit</button>
        <Link to="/signin" className="forgot-passwords-links"> Signin</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
