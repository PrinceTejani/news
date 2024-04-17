import React, { useState } from "react";
import "./User.css";

export default function User() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError(
      value.length < 5 ? "Username must be at least 5 characters long" : ""
    );
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      value.length < 5 ? "Password must be at least 5 characters long" : ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login here (not shown in this code)
      // You can add the login functionality here
    } else {
      // Handle registration
      if (username.length < 5 || password.length < 5) {
        setUsernameError("Username must be at least 5 characters long");
        setPasswordError("Password must be at least 5 characters long");
        return;
      }

      // Send a registration request to the server
      const registrationData = {
        UserName: username,
        Password: password,
      };

      try {
        const response = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registrationData),
        });

        if (response.ok) {
          // Registration successful, you can handle this as needed
          // For example, you can show a success message or redirect the user.
          setRegistrationMessage("Registration successful");
        } else {
          // Registration failed, handle the error
          setRegistrationMessage("Registration failed");
        }
      } catch (error) {
        // Handle network errors
        console.error("Network error:", error);
        setRegistrationMessage("Network error");
      }
    }
  };

  return (
    <div className="login-container">
      <div className={`login ${isLogin ? "login-form" : "signup-form"}`}>
        <h2 style={{ color: "white" }}>{isLogin ? "Login" : "Sign Up"}</h2>
        {registrationMessage && (
          <p style={{ color: registrationMessage.includes("successful") ? "green" : "red" }}>
            {registrationMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" style={{ color: "white" }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
            {usernameError && (
              <span className="error-message" style={{ color: "red" }}>
                {usernameError}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ color: "white" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <span className="error-message" style={{ color: "red" }}>
                {passwordError}
              </span>
            )}
          </div>
          {isLogin ? (
            <button type="submit">Login</button>
          ) : (
            <button type="submit">Sign Up</button>
          )}
        </form>
        <p onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
