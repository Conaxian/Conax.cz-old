import { load, LoadShape } from "./page";

declare global {
  var conax: Globals;
}

interface Globals {
  load: LoadShape;
}

window.conax = { load };
