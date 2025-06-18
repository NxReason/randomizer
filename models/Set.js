const { client } = require('./db');

const TABLE = 'sets';

async function find() {
  return await client.query(`SELECT * FROM ${TABLE}`);
}

module.exports = { find };
