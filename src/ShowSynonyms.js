import React from "react";

export default function ShowSynonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="ShowSynonyms">
        {props.synonyms.map(function (synonyms, index) {
         return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
