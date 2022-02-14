import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
