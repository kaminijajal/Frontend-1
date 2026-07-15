import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit =(event)=>{
        event.preventDefault();
        alert(`Username : ${username} \n Password : ${password}`);
        setUsername("");
        setPassword("");
    };
    return (
    <div className="login-container">
        
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event)=> setUsername(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>

    </div>
  );
}

export default LoginForm;