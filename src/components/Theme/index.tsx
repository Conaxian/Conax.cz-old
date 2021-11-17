import { Component, ReactNode, createContext } from "react";
import { CssBaseline, ThemeProvider, Theme as MuiTheme } from "@mui/material";

import "katex/dist/katex.min.css";

import { getTheme, setTheme } from "./theme-storage";

export const ThemeContext = createContext({
  theme: getTheme(),
  toggleTheme: () => {},
});

interface Props {
  children?: ReactNode;
  light: MuiTheme;
  dark: MuiTheme;
  root?: boolean;
}

interface State {
  theme: string;
  toggleTheme: () => void;
}

class Theme extends Component {
  override props!: Readonly<Props>;
  override state!: Readonly<State>;
  toggleTheme: () => void;
  static override contextType = ThemeContext;

  constructor(props: object) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state: State) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        return { theme: newTheme };
      });
    };

    this.state = {
      theme: getTheme(),
      toggleTheme: this.toggleTheme,
    };
  }

  override render() {
    const themeCore = (
      <ThemeContext.Consumer>
        {(theme) => (
          <ThemeProvider
            theme={theme.theme === "light" ? this.props.light : this.props.dark}
          >
            <CssBaseline />
            {this.props.children}
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    );

    if (this.props.root)
      return (
        <ThemeContext.Provider value={this.state}>
          {themeCore}
        </ThemeContext.Provider>
      );

    return themeCore;
  }
}

export default Theme;
