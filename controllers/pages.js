const Set = require('../models/Set');

async function index(req, res) {
  let set = null;
  let error = null;
  try {
    if (req.query.set) {
      dbSet = await Set.find(req.query.set);
      set = dbSet.rows[0];
    }
  } catch (err) {
    console.error(`Error trying to get set: ${err}`);
    error = err;
  }

  res.render('index', { set, error });
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
