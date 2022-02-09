import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="lorem" element={<p>Lorem</p>} />
        <Route path="ipsum" element={<p>Ipsum</p>} />
        <Route index element={<></>} />
      </Routes>
    </div>
  );
};

export default App;
