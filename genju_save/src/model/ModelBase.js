import db from './DbSingleton'

export default class ModelBase {
  constructor(table_name) {
    this.db = db;
    this.table_name = table_name;
  }

  find(query) {
    return this.db.find(Object.assign({table_name: this.table_name}, query));
  }

  insert(query) {
    return this.db.insert(
      Object.assign({table_name: this.table_name}, query)
    );
  }
}
