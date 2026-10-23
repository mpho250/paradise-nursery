import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <header>
        <h1>Paradise Nursery</h1>
        <p>Bring Nature Into Your Home</p>
        <button onClick={() => alert("Welcome to Paradise Nursery!")}>
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
