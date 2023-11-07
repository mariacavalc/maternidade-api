
const knex = require('knex');

const connection = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'r00t',
    database: 'database'
  }
});

module.exports = connection;
