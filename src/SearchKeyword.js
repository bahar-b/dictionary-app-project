import React, { useState } from "react";
import axios from "axios";
import ShowResult from "./ShowResult";
import "./SearchKeyword.css";

export default function SearchKeyword(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleInput(event) {
    setKeyword(event.target.value);
  }
  if (loaded) {
    return (
      <div className="SearchKeyword">
        <h1>What word do you want to look up?</h1>
        <form className="form-part" onSubmit={handleSubmit}>
          <input type="search" placeholder="sunset" onChange={handleInput} />
          <p>Get definitions, synonyms, and more</p>
          <section>
            <ShowResult results={results} />
          </section>
        </form>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
