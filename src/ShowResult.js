import React from "react";
import ShowMeanings from "./ShowMeanings";
import ShowPhonetics from "./ShowPhonetics";
import "./ShowResult.css";

export default function ShowResult(props) {
  if (props.results) {
    return (
      <div className="ShowResult">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <ShowPhonetics phonetics={phonetic} />
              </div>
            );
          })}
          {props.results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <ShowMeanings meanings={meanings} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
