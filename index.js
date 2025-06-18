require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const { PORT } = process.env;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
