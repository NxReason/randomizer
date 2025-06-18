const Set = require('../models/Set');

function index(req, res) {
  res.render('index');
}

async function sets(req, res) {
  let sets = [];
  let error = null;
  try {
    setsDB = await Set.find();
    sets = setsDB.rows;
  } catch (err) {
    console.error(err);
    error = `Can't retrieve sets from DB`;
  }

  res.render('sets', { sets, error });
}

module.exports = { index, sets };
