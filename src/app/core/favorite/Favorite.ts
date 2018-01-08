export default class Favorite {
  url: string;
  name: string;
  type: string;

  constructor(url: string, name: string, type: string) {
    this.url = url;
    this.name = name;
    this.type = type;
  }
}
