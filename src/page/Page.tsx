import { StrictMode } from "react";
import { render as renderDom } from "react-dom";

import Header from "../components/Header";
import Theme from "../components/Theme";
import { lightTheme, darkTheme } from "../lib/theme";

import type { PageType, PageData, DataMap } from "./types";

export default class Page {
  public id: string;
  public type: PageType;

  constructor(data: PageData) {
    this.id = data.id;
    this.type = data.type;
  }

  async construct(data?: DataMap) {
    if (this.type === "static") {
      return this.constructStatic(data);
    } else if (this.type === "app") {
      return this.constructApp(data);
    } else {
      throw new TypeError(`Invalid page type: \`${this.type}\``);
    }
  }

  private async constructStatic(data?: DataMap) {
    const Page = await this.getStatic();
    const app = (
      <Theme root light={lightTheme} dark={darkTheme}>
        <div className="app">
          <Header />
          <Page {...(data as any)} />
        </div>
      </Theme>
    );

    return async (root: HTMLDivElement) => {
      renderDom(<StrictMode>{app}</StrictMode>, root, () => {
        const time = window.performance.now();
        console.log(`Rendered page in ${time} ms`);
      });
    };
  }

  private async getStatic() {
    const staticPage = await this.loadStaticPage();
    if (!staticPage) {
      throw new ReferenceError(`Unknown static page: \`${this.id}\``);
    }
    return staticPage.default;
  }

  private async constructApp(data?: DataMap) {
    return async (root: HTMLDivElement) => {
      const run = await this.getApp();
      await run(root, data as any);
    };
  }

  private async getApp() {
    const appPage = await this.loadAppPage();
    if (!appPage) {
      throw new ReferenceError(`Unknown app page: \`${this.id}\``);
    }
    return appPage.default;
  }

  private async loadStaticPage() {
    switch (this.id) {
      case "Home":
        return await import("./static/HomePage");
      case "About":
        return await import("./static/AboutPage");
      case "NoteMenu":
        return await import("./static/NoteMenuPage");
      case "Note":
        return await import("./static/NotePage");
      default:
        return undefined;
    }
  }

  private async loadAppPage() {
    switch (this.id) {
      case "Game":
        return await import("../game");
      default:
        return undefined;
    }
  }
}
