const Set = require('../models/Set');

async function all(req, res) {
  try {
    const queryResult = await Set.find();
    res.json({ ok: true, data: queryResult.rows });
  } catch (err) {
    res.status(500).json({ ok: false, msg: `Can't retreive sets from db` });
  }
}

module.exports = {
  all,
};
