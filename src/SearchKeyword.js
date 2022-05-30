import React, { useState } from "react";
import axios from "axios";
import ShowResult from "./ShowResult";
import "./SearchKeyword.css";

export default function SearchKeyword() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults]= useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleInput(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="SearchKeyword">
      <form className="form-part" onSubmit={handleSubmit}>
        <input type="search" placeholder="search..." onChange={handleInput} />
        <ShowResult results={results}/>
      </form>
    </div>
  );
}
