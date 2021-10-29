import React from "react";
import { Button } from "./button";

export const Item = ({ content , id, color, onClick }) => {
  // console.log(color)
  // console.log(content)
  return (
    <div className="item" style={{ backgroundColor: color }} >
      <div className="item-content">
        {content}
        <Button onClick={ () => onClick(id) } content="X" color="#0e1086b8" />
      </div>
    </div>
  );
};
