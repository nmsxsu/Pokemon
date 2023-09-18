export interface IHttpResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export class HttpResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];

  constructor(p: IHttpResponse) {
    this.count = p.count;
    this.next = p.next;
    this.previous = p.previous;
    this.results = p.results;
  }
}

export class Pokemon {
  name: string;
  url: string;

  constructor(p: Pokemon) {
    this.name = p.name;
    this.url = p.url;
  }
}
