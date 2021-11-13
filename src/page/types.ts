export type PageType = "static" | "app";

export interface PageData {
  id: string;
  type: PageType;
}

export interface DataMap {
  [key: string]: string | number | boolean | null | DataMap;
}

export interface LoadData {
  page: PageData;
  sessionId: string;
  data?: DataMap;
}

export type LoadShape = (data: LoadData) => Promise<void>
