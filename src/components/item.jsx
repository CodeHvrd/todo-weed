import React from "react";
import { Button } from "./button";

export const Item = ({ text }) => {
  return (
    <div className="item">
      <div className="item-content">
        {text}
        <Button content="X" color="#0e1086b8" />
      </div>
    </div>
  );
};
