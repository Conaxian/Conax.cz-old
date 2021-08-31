import React from "react";
import Header from "./header.jsx";

class App extends React.Component {
  render() {
    const pageData = this.props.pageData;
    return (
      <div className="app">
        <Header hasMenu={pageData.hasMenu} />
      </div>
    );
  }
}

export default App;
