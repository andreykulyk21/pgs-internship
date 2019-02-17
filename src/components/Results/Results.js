import React, { Component } from "react";

const searchStyle = {
  backgroundColor: "rgb(45, 45, 45)",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "8rem",
  placeItems: "center"
};


class Results extends Component {
  render() {
    return (
      <div>
        {this.props.results}
      </div>
    );
  }
}

export default Results;
