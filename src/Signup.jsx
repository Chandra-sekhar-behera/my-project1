import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';


const Signup = () => {
    return (
        <div className="signup-page-container">
            <div className="signup-form-container">
                <h1 className="signup-form-title">Helpdesk System</h1>
                <p className="signup-form-title">Sign Up here</p>
                <div>
                    <input
                        type="text"
                        className="signup-input"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className="signup-input"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        className="signup-input"
                        placeholder="Email"
                    />
                </div>
                <button className="signup-button">Sign Up</button>
                <div className="signup-links">
                    <Link to="/forgot-password" className="signup-link">Forgot Password</Link>
                    <Link to="/signin" className="signin-link">Sign In</Link>
                </div>
            </div>
        </div>
    );
};  

export default Signup;