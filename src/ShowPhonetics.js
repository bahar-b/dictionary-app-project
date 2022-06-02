import React from "react";
import "./ShowPhonetics.css"

export default function ShowPhonetics(props) {
  if (props.phonetics) {
    return (
      <div className="ShowPhonetics">
        <span>
          <span className="phonetic">{props.phonetics.text}</span>
          <a href={props.phonetics.audio} target="-blank">
            Listen
          </a>
        </span>
      </div>
    );
  } else {
    return null;
  }
}
