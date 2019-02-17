import React, { Component } from "react";

import Header from "../Header/Header";
import Search from "../Search/Search";
import Results from "../Results/Results";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;