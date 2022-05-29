import React, { useState } from "react";
import axios from "axios";
import "./SearchKeyword.css";

export default function SearchKeyword() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
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
      </form>
    </div>
  );
}
