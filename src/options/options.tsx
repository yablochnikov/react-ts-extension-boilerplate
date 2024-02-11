import React, { FC } from "react";
import { render } from "react-dom";
import "./options.css";

const App: FC<{}> = () => {
  return <p>Options</p>;
};

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
