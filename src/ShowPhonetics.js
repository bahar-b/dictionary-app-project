import React from "react";

export default function ShowPhonetics(props) {
  if (props.phonetics) {
    return (
      <div className="ShowPhonetics">
        <a href={props.phonetics.audio} target="-blank">Listen</a>
        <p>{props.phonetics.text}</p>
      </div>
    );
  } else {
    return null;
  }
}
