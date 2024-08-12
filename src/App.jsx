import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/Details";

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
