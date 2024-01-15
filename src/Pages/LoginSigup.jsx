import React from 'react';
import './CSS/LoginSigup.css';

const LoginSigup = () => {
    return (
        <div className="loginsingup">
            <div className="loginsingup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account? <span>Login here</span>
                </p>
                <span>Login here</span>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSigup;
