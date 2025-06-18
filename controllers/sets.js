const Set = require('../models/Set');

async function all(req, res) {
  try {
    const queryResult = await Set.find();
    res.json({ ok: true, data: queryResult.rows });
  } catch (err) {
    res.status(500).json({ ok: false, msg: `Can't retreive sets from db` });
  }
}

async function remove(req, res) {
  const { id } = req.params;
  try {
    const queryResult = await Set.remove(id);
    res.json({ ok: true, set: queryResult.rows[0] });
  } catch (err) {
    res.status(500).json({ ok: false, msg: `Can't remove set with id: ${id}` });
  }
}

module.exports = {
  all,
  remove,
};
