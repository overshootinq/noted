import React from "react";
import searchIcon from "../assets/icons/search_icon.svg";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <img className="search-icon" src={searchIcon} alt="Search" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
