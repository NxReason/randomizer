const { client } = require('./db');

const TABLE = 'sets';

async function find(id) {
  let QUERY_STRING = `SELECT * FROM ${TABLE}`;
  if (id) {
    QUERY_STRING += ` WHERE id = ${id}`;
  }
  return await client.query(QUERY_STRING);
}

async function remove(id) {
  return await client.query(
    `DELETE FROM ${TABLE} WHERE id=${id} RETURNING id, name`
  );
}

async function save({ name }) {
  return await client.query(
    `INSERT INTO ${TABLE}(name) VALUES ('${name}') RETURNING *`
  );
}

async function rename(id, newName) {
  return await client.query(
    `UPDATE TABLE ${TABLE} SET name=${newName} WHERE id = ${id}`
  );
}

module.exports = { find, remove, rename, save };
