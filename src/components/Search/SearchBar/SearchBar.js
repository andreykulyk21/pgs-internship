import React, { Component } from "react";

const buttonStyle = {
  backgroundColor: "rgb(247, 148, 29)",
  width: "33%",
  borderRadius: "0 1rem 1rem 0"
};
const inputStyle = {
  backgroundColor: "rgb(240, 240, 240)",
  width: "66%",
  borderRadius: "1rem 0 0 1rem"
};

const searchBarStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  width: "10rem",
  height: "1.6rem"
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.queryToApi = this.queryToApi.bind(this);
    this.handleSearchAreaChange = this.handleSearchAreaChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  queryToApi(songName) {
    fetch(
      `https://itunes.apple.com/search?entity=song&attributes=songTerm&term="${songName}"`
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            resultCount: result.resultCount,
            items: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  handleSearchAreaChange(element) {
    this.setState({ query: element.target.value });
  }
  handleSubmitButton() {
    this.queryToApi(this.state.query ? this.state.query : "");
  }
  render() {
    return (
      <div style={searchBarStyle}>
        <input
          style={inputStyle}
          placeholder="Search songs..."
          value={this.state.query ? this.state.query : ""}
          onChange={this.handleSearchAreaChange}
        />
        <button style={buttonStyle} onSubmit={this.handleSubmitButton}>
          search
        </button>
      </div>
    );
  }
}

export default SearchBar;
