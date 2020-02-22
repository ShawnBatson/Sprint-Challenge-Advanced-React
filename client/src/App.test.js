import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("app renders without crashing!", () => {
  render(<App />);
});

test("grabbing text on DOM", () => {
  const { getByText } = render(<App />);

  const woman = getByText(/Women's/i);

  expect(woman).toBeTruthy();
});
