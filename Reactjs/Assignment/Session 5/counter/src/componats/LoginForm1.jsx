import React, { useState } from "react";

function LoginForm1() {

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [conatct,setContact]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        setAge("");
        setContact("");
        setPassword("");

    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" 
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{padding:8, fontSize:20 ,margin:10}}/>
        <br />

        <input type="text" placeholder="Enter your age" 
        value={age}
        onChange={(event) => setAge(event.target.value)}
        style={{padding:8, fontSize:20 ,margin:10}}/>
        <br />

        <input type="text" placeholder="Enter your contact" 
        value={conatct}
        onChange={(event) => setContact(event.target.value)}
        style={{padding:8, fontSize:20 ,margin:10}}/>
        <br />

        <input type="password" placeholder=" Enter your password" 
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        style={{padding:8, fontSize:20 ,margin:10}}/>

        <br />

        <button type="submit" style={{width:150,margin:20}}>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm1;
