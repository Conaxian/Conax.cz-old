import { Component } from "react";
import Header from "./components/Header";

interface Props {
  page: JSX.Element,
}

class App extends Component {
  props!: Props;

  render() {
    return (
      <div className="app">
        <Header />
        { this.props.page }
      </div>
    );
  }
}

export default App;
