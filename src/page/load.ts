import Page from "./Page";

import type { LoadData } from "./types";

export default async function load(data: LoadData) {
  const page = new Page(data.page);
  const run = await page.construct(data.data);
  const root = document.getElementById("root");

  await run(root as HTMLDivElement);
}
