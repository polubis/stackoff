import React, { FC } from "react";
import ReactDOM from "react-dom";
import { Button } from "./button";

const Playground: FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button high>Confirm and generate</Button>
      <Button medium>Medium</Button>
      <Button low>Low</Button>
    </div>
  );
};

ReactDOM.render(<Playground />, document.getElementById("root"));
