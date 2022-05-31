import React from "react";

export default function ShowExample(props) {
  if (props.example) {
    return (
      <div className="ShowExample">
        <p>
          {" "}
          <strong>Example:</strong>
          {props.example}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
