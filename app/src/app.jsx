import React from "react";
import Header from "./header.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header hasMenu="true" />
      </div>
    );
  }
}

export default App;
