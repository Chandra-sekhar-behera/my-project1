import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
const Signin = () => {
    return (
        <div className="signin-page-container" >
             <div className="signin-form-container">
             
             <h1 className="signin-form-title">Helpdesk System</h1>

             <div>
             <input 
                 type="text"
                 className="signin-input"
                 placeholder="Username"
                 
             />
             </div>   

            <div>
            <input
                 type="password"
                 className="signin-input"
                 placeholder="Password"
             />
            </div>
             
             <button className="signinn-button">
                 Sign In
             </button>

             <div className="signin-links">
                 <Link to="/forgot-password" className="forget-link" aria-label="Forgot password">
                     Forgot password
                 </Link>
                 <Link to="/signup" className="sign-link" aria-label="Sign Up">
                     Sign Up
                 </Link>
             </div>
         </div>
        </div>
    );
};

export default Signin;
