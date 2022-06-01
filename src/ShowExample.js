import React from "react";

export default function ShowExample(props) {
  if (props.example) {
    return (
      <div className="ShowExample">
        <div className="example">
          {props.example}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
