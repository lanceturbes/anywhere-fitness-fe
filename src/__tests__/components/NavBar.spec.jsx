import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "../../components/NavBar.jsx";

describe("NavBar Component", () => {
  it("renders without errors", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
  });
});
