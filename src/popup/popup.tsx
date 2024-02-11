import React, { FC } from "react";
import ReactDom from "react-dom";
import "./popup.css";

const App: FC<{}> = () => {
  return <p>Popup</p>;
};

const root = document.createElement("div");
document.body.appendChild(root);

ReactDom.render(<App />, root);
