import React from "react";

export default function ShowMeanings(props) {
  return (
    <div className="ShowMeanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p> {definition.definition}</p>
            <p> {definition.example}</p>
          </div>
        );
      })}
    </div>
  );
}
