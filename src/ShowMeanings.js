import React from "react";
import ShowSynonyms from "./ShowSynonyms";
import ShowExample from "./ShowExample";

export default function ShowMeanings(props) {
  return (
    <div className="ShowMeanings">
      <section>
        <h3>{props.meanings.partOfSpeech}</h3>
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definition">
                {definition.definition}
              </div>
              <ShowExample example={definition.example} />
              <ShowSynonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
