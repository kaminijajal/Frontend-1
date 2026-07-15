import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Playlist from "./componats/Playlist";
import OrderStatus from "./componats/OrderStatus";
import FollowerList from "./componats/FollowerList";
import CartSummary from "./componats/CartSummary";

function App() {
  return (
    <>
      <Playlist />
      <OrderStatus isDelivered={true} />
      <OrderStatus isDelivered={false} />
      
      <FollowerList />

      <CartSummary/>
    </>
  );
}

export default App;
