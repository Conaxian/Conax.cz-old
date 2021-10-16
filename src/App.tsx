import { Component } from "react";

import Header from "./components/Header";
import Theme from "./components/Theme";
import { lightTheme, darkTheme } from "./theme";

interface Props {
  page: JSX.Element
}

class App extends Component {
  props!: Readonly<Props>;

  render() {
    return (
      <Theme root light={lightTheme} dark={darkTheme}>
        <div className="app">
          <Header />
          {this.props.page}
        </div>
      </Theme>
    );
  }
}

export default App;
