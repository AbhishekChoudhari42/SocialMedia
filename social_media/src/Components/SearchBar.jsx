// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/SearchBar.css";
import { TfiSearch } from "react-icons/tfi";

/*
Not using Material for the Searchbar as the code written for it exceeds the vanilla code Styling is also very difficult to implement. */

const SearchBar = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = (e) => {
    console.log(e);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="search-form">
        {/* {Cannot directly use SX on TextField due to Input wrapper; any applied
        styling affects the Input, not the TextField. It's a Limitation} */}
        <input type="text" placeholder="search" onChange={inputHandler}></input>
        <button>
          <TfiSearch />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
