import React, { useState } from "react";
import axios from "axios";
import ShowResult from "./ShowResult";
import "./SearchKeyword.css";

export default function SearchKeyword(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001f8596e37f35c4fbfaf6d4bebd82d0951";
    let pexelsApiUrl = `"https://api.pexels.com/v1/search?query=nature&per_page=1"`;
    axios.get(pexelsApiUrl).then(handlePexelsResponse);
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
