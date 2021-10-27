import React, {useState} from "react";
import { Button } from "./button";


export const Item = ({ text, onClick }) => {
  return (
    <div className="item">
      <div className="item-content">
        {text}
        <Button onClick ={onClick} content="X" color="#0e1086b8" />
      </div>
    </div>
  );
};
