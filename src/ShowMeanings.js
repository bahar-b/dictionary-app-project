import React from "react";
import ShowSynonyms from "./ShowSynonyms";
import ShowExample from "./ShowExample";

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
            <ShowExample example={definition.example} />
            <ShowSynonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
