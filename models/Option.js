const { client } = require('./db');

const TABLE = 'options';

async function findSetOptions(setId) {
  return await client.query(`SELECT * FROM options WHERE set_id = ${setId}`);
}

async function saveSetOptions(names, setId) {
  let QUERY_STR = `INSERT INTO ${TABLE} (name, set_id) VALUES`;
  namesStr = names.map(name => {
    return ` ('${name}', ${setId})`;
  });
  QUERY_STR += namesStr.join(',');

  return await client.query(QUERY_STR);
}

module.exports = { findSetOptions, saveSetOptions };
