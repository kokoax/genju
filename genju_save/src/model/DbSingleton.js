var Datastore = new require('nedb')
  , db = new Datastore({ filename: './genju.db' });

Object.freeze(db)
export default db;
