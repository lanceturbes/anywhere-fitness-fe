import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import HomePage from "../../pages/HomePage.jsx";

describe("HomePage Component", () => {
  it("renders without errors", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
  });
});
