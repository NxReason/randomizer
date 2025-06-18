require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes');
const db = require('./models/db');

const app = express();
const { PORT, NODE_ENV } = process.env;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/', router);

async function run() {
  await db.connect();
  console.log(`connected to db: ${db.client.database}`);
  if (NODE_ENV === 'dev') {
    await db.dropTables();
    await db.createTables();
    await db.populate();
  }

  app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
  });
}
run();
