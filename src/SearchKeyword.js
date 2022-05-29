import React, { useState } from "react";
import "./SearchKeyword.css";

export default function SearchKeyword() {
    let[keyword, setKeyword]= useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`search for ${keyword}`);
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
