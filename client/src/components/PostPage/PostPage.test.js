import React from "react";
import ReactDOM from "react-dom";
import PostPage from "./PostPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PostPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
