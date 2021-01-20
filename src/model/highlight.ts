export interface Highlight {
  label: string;
  value: string;
  type: HighlightType;
  subValue?: string;
}

export enum HighlightType {
  default,
  slider,
  direction
}
