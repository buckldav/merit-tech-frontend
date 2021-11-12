export interface Result {
  time: string;
  i: number;
  gg?: string;
  pr?: boolean;
}

export interface ResultsProps {
  results: Result[][];
  apiKey: string;
}
