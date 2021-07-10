export interface Type {
  name: string;
  url: string;
}

export interface TypeResultApi {
  count: number;
  results: Type[];
  next?: any;
  previous?: any;
}

