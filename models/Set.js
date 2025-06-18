const { client } = require('./db');

const TABLE = 'sets';

async function find() {
  return await client.query(`SELECT * FROM ${TABLE}`);
}

async function remove(id) {
  return await client.query(
    `DELETE FROM ${TABLE} WHERE id=${id} RETURNING id, name`
  );
}

module.exports = { find, remove };
