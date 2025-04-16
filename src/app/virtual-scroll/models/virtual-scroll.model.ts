export interface Items {
  url: string;
  name: string;
  description: string;
  id: number;
  tansformY: number;
}

export interface CursorInfo {
  size: number;
  nextCursor: number;
  prevCursor: number;
  chunk: Items[];
}
