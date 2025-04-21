import React, { useState } from "react";
import logo from "../Components/JKLU.png"; 

const Login = (props) => {
  const [loading, setLoading] = useState(false);

  const handleLoginClick = async () => {
    setLoading(true);
    await props.connectWallet(); 
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
      
        <img src={logo} alt="Logo" className="logo" />

        <h1 className="welcome-message">
          Welcome to Decentralized Voting Application
        </h1>
        <p className="sub-text">Secure your vote with Metamask</p>

       
        <p className="description">
          Decentralized voting ensures transparency, privacy, and security for
          every vote. Join the movement today and be a part of a secure
          democratic process.
        </p>

       
        <button
          className="login-button"
          onClick={handleLoginClick}
          disabled={loading}
        >
          {loading ? "Connecting..." : "Login with Metamask"}
        </button>

        <div className="footer">
          <p>© 2024 Decentralized Voting</p>

        </div>
      </div>
    </div>
  );
};

export default Login;
