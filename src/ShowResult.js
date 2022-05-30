import React from "react";
import ShowMeanings from "./ShowMeanings";

export default function ShowResult(props) {
  if (props.results) {
    return (
      <div className="ShowResult">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <ShowMeanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
