import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import BookDetails from "./BookDetails.js";

export const SearchArea = (props) => {
 
  return (
    <div>
      <input
        type="search"
        onChange={props.handleInput}
        value={props.updateInputValue}
        name="ID"
        id="search"
        className="inputStyle golden-color-border"
      />

      <Link
        className="productButtonStyle button-color-brown"
        to={{
          pathname: "/BookDetails/" + props.title,
          state: {
            detail: props.detail,
            title: props.title,
          },
        }}
      >
        
        Search
      </Link>
    </div>
  );
};
export default SearchArea;
