export class Name {
  id: number;
  name: string;
  company: string;
  seasons: number;
  description: string;
  source: string;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    company: string,
    seasons: number,
    description: string,
    source: string,
    imageUrl: string
  ) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.description = description;
    this.seasons = seasons;
    this.source = source;
    this.imageUrl = imageUrl;
  }
}
