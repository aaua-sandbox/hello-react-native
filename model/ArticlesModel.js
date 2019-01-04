import { Articles } from "../data/Articles";

export default class ArticlesModel {
  constructor(limit = 0) {
    this._init(limit);
  }

  _init(limit) {
    this.page = -1;
    this.per = 10;
    this.limit = limit;
    this.is_loaded = false
  }

  isLoaded() {
    return this.is_loaded
  }

  refresh() {
    this._init(this.limit);
    return this.get();
  }

  get() {
    if (this.isLoaded()) { return []; }

    this.page++;

    let begin = this.page * this.per;
    let end = begin + this.per;

    if (this.limit > 0) {
      if (begin > this.limit) {
        this.is_loaded = true;
        return [];
      }
      if (end > this.limit) {
        end = this.limit;
      }
    }

    let articles = Articles.slice(begin, end);
    if (articles.length === 0) {
      this.is_loaded = true;
    }

    console.debug("Load " + this.constructor.name + '{ page => '  + this.page + ' }');

    return articles
  }
}
