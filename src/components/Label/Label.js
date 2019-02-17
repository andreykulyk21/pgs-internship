import React, { Component } from "react";

const defaultStyle = {
  fontFamily: "Lato",
  lineHeight: "1.2",
  textAlign: "left"
};
export const styles = {
  title: {
    fontSize: "26px",
    color: "rgb(255, 254, 254)",
    fontWeight: "bold"
  },
  description: {
    fontSize: "14px",
    color: "rgb(255, 255, 255)"
  },
  searchInput: {
    fontSize: "16px",
    color: "rgb(70, 69, 69)"
  },
  searchButton: {
    fontSize: "14px",
    color: "rgb(255, 255, 255)"
  }
};

class Label extends Component {
  render() {
    return <label style={{ ...defaultStyle, ...this.props.styleAddition}}>{this.props.children}</label>;
  }
}

export default Label;
