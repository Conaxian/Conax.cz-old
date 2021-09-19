import { Component as ReactComponent } from "react";
import Header from "./components/Header";

class App extends ReactComponent {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
