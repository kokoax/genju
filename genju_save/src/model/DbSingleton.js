const Datastore = require('nedb-promises');
const path = '../../dist/db/genju.db';

let db = Datastore.create(path);

db.load();
export default db;
