import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import LikeButton from "./componats/LikeButton";
import SearchBar from "./componats/SearchBar";
import LoginForm from "./componats/LoginForm";
import PlaylistAdder from "./componats/PlaylistAdder";
import LoginForm1 from "./componats/LoginForm1";
import Playlist from "./componats/Playlist";

function App() {
  const [count,setCount] = useState()
  
  return (
    <>
      <LikeButton />
      <SearchBar />
      <h1>Login Form Example</h1>
      <LoginForm />
      <hr />
      <h1>PlayListAdder Example</h1>
      <PlaylistAdder />
      <h1>Login 2 Form Example</h1>
      <LoginForm1 />
      
    </>
  );
}

export default App;
