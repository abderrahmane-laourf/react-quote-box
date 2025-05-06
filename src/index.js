import React from "react";
import ReactDOM from "react-dom/client"; // For React 18 and above
import Todolist from "./App"; // Import your App component
import './index.css'; // Make sure this is present


// This is how you render the app in the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>
);

