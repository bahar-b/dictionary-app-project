import React from "react";
import ShowSynonyms from "./ShowSynonyms";

export default function ShowMeanings(props) {
  return (
    <div className="ShowMeanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {" "}
              <strong>Definition:</strong> {definition.definition}
            </p>
            <p>
              {" "}
              <strong>Example:</strong>
              {definition.example}
            </p>
            <ShowSynonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
