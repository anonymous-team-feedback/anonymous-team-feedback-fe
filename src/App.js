import React from "react";
import "./App.css";

import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";

const App = props => {
  return (
    <div className="App">
      <h1>🙊🙉🙈😎🗣👉anonymous feedback app👈🗣😎🙊🙉🙈</h1>
      <Login />
      <Navbar />
    </div>
  );
};

export default App;
