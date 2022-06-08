import React from "react";
import "./ShowExample.css";

export default function ShowExample(props) {
  if (props.example) {
    return (
      <div className="ShowExample">
        <div className="example">"{props.example}"</div>
      </div>
    );
  } else {
    return null;
  }
}
