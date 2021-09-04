"use strict";

import React from "react";
import Header from "./header.jsx";

class App extends React.Component {
  render() {
    const pageData = this.props.pageData;
    return (
      <div className="app">
        <Header hasSidebar={pageData.hasSidebar} />
      </div>
    );
  }
}

export default App;
