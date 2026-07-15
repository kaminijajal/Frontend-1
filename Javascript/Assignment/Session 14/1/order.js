// order.js

import { generateOrderId } from "./utils.js";

const btn = document.querySelector("#generateBtn");
const output = document.querySelector("#output");

btn.addEventListener("click", () => {
  const id = generateOrderId();
  output.textContent = "New Order ID: " + id;
});