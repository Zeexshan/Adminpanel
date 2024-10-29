import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { Person, Lock, Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      navigate("/Admin");
    } else {
      alert("Incorrect username or password");
    }
  };

  console.log('Click on regist first to register as a new user and calculate your score after that login as admin through the username and password for that is admin and admin123')

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="top">
          <div className="logo">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
              alt="Logo"
            />
          </div>
          <h1>Welcome Back</h1>
          <p>Please enter your credentials to login</p>
        </div>
        <div className="bottom">
          <form onSubmit={handleLogin}>
            <div className="formInput">
              <Person className="icon" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="formInput">
              <Lock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <VisibilityOff
                  className="passwordIcon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <Visibility
                  className="passwordIcon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <div className="options">
              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#forgot" className="forgot">
                Forgot Password?
              </a>
            </div>
            <button type="submit">Login</button>
            <div className="register">
              <span>Don't have an account? </span>
              <a onClick={()=>{
                navigate("/Users/new");
              }}>Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
