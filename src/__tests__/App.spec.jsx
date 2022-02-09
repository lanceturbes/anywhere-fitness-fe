import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "../App.jsx";

it("renders without errors", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
