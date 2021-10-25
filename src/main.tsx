import { ComponentClass, StrictMode } from "react";
import { render as renderDom } from "react-dom";

import App from "./App";

interface PageData {
  page: string;
  data?: {};
}

async function getPage(pageData: PageData): Promise<ComponentClass> {
  let module;

  switch (pageData.page) {
    case "Home":
      module = await import("./pages/HomePage");
      break;
    case "About":
      module = await import("./pages/AboutPage");
      break;
    case "NoteMenu":
      module = await import("./pages/NoteMenuPage");
      break;
    case "Note":
      module = await import("./pages/NotePage");
      break;
    default:
      throw new Error(`Unknown page: \`${pageData.page}\``);
  }

  return module.default;
}

async function load(pageData: PageData) {
  const Page = await getPage(pageData);
  const pageElem = <Page {...pageData.data} />;

  renderDom(
    <StrictMode>
      <App page={pageElem} />
    </StrictMode>,
    document.getElementById("root")
  );
}

declare global {
  interface Window {
    appGlobal: AppGlobal;
  }
}

interface AppGlobal {
  load: (pageData: PageData) => void;
}

window.appGlobal = { load };
