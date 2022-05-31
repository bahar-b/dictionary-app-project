import React from "react";

export default function ShowPhonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return (
      <div className="ShowPhonetics">
        {props.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <a href={phonetics.audio}>listen</a>
              {""} {""}
              {phonetics.text}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
