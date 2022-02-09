import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import Navbar from "../../components/Navbar.jsx";

describe("Navbar Component", () => {
  it("renders without errors", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  });
});
