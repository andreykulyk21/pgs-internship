import React, { Component } from "react";
import Label, { styles } from "../Label/Label";
import SearchBar from "./SearchBar/SearchBar";

const searchStyle = {
  backgroundColor: "rgb(45, 45, 45)",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "8rem",
  placeItems: "center"
};


class Search extends Component {
  render() {
    return (
      <div style={searchStyle}>
        <Label styleAddition={styles.title}>"iTunes api example"</Label>
        <SearchBar />
        <Label styleAddition={styles.description}>"Search by song title, author, song number, lyrics, catalog or copyright owner"</Label>
      </div>
    );
  }
}

export default Search;
