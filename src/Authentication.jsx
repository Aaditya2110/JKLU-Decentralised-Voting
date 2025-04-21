import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import bgImage from './Components/bg.jpg'; 

function Authentication({ onAuthenticate }) {
  const [rollNumber, setRollNumber] = useState("");
  const [error, setError] = useState("");

 
  const rollNumberRegex = /^2022Btech\d{3}$/;

  const handleInputChange = (e) => {
    setRollNumber(e.target.value);
    setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rollNumberRegex.test(rollNumber)) {
      onAuthenticate(); 
    } else {
      setError("Invalid Roll Number.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "absolute",
          top: "20px",
          width: "100%",
          textAlign: "center",
          fontSize: "45px",
          fontWeight: "bold",
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.7)",
          color: "#fb7d00",
        }}
      >
        JK Lakshmipat University
      </header>

  
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <Typewriter
          options={{
            strings: ["Every Vote Matters"],
            autoStart: true,
            loop: true,
            delay: 50, 
            deleteSpeed: 40, 
            pauseFor: 500, 
          }}
        />
      </div>


      <style>
        {`
          .Typewriter__wrapper {
            font-size: 40px;  /* Increased font size */
            font-weight: bold;  /* Made text bold */
            color: #ffffff;  /* Orange color for the text */
            text-shadow: 3px 3px 5px rgb(253, 103, 4);  /* Subtle shadow for emphasis */
          }
        `}
      </style>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          width: "90%",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#fb7d00",
            fontSize: "24px",
            fontWeight: "600",
          }}
        >
          Voting Authentication
        </h2>
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="rollNumber"
            style={{
              display: "block",
              marginBottom: "10px",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#333",
            }}
          >
            Enter Your Roll Number
          </label>
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={handleInputChange}
            placeholder="Enter your roll number"
            style={{
              width: "100%",
              padding: "14px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
              boxSizing: "border-box",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#fb7d00")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
        </div>
        {error && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "15px" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            backgroundColor: "#fb7d00",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#fb7d00")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Authenticate
        </button>
      </form>
    </div>
  );
}

export default Authentication;
