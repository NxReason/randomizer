const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

async function connect() {
  return await client.connect();
}

async function createTables() {
  const CREATE_SETS = `CREATE TABLE IF NOT EXISTS sets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL
  )`;
  await client.query(CREATE_SETS);

  const CREATE_OPTIONS = `CREATE TABLE IF NOT EXISTS options (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    set_id INTEGER REFERENCES sets(id) NOT NULL
  );`;
  await client.query(CREATE_OPTIONS);
}

async function dropTables() {
  const QUERY = `
  DROP TABLE IF EXISTS options;
  DROP TABLE IF EXISTS sets;
  `;
  await client.query(QUERY);
}

async function populate() {
  const SETS = `INSERT INTO sets (name)
  VALUES ('set 1'), ('set 2');`;
  await client.query(SETS);
}

module.exports = { client, connect, createTables, dropTables, populate };
