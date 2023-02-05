import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import a from "./main.module.css";
const App = () => {
  return (
    <div id={a.body}>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
