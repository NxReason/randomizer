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

async function save(req, res) {
  const { name } = req.body;
  try {
    const queryResult = await Set.save({ name });
    res.json({ ok: true, set: queryResult.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, msg: `Can't save new set` });
  }
}

module.exports = {
  all,
  remove,
  save,
};
