const Set = require('../models/Set');
const Option = require('../models/Option');

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
  const { name, options } = req.body;
  try {
    const setQueryResult = await Set.save({ name });
    const set = setQueryResult.rows[0];
    const optionsQueryResult = await Option.saveSetOptions(options, set.id);
    res.json({ ok: true, set, options: optionsQueryResult.rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, msg: `Can't save new set` });
  }
}

async function update(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const queryResult = await Set.update(id, { name });
    console.log(queryResult);

    res.json({ ok: true, set: queryResult.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, msg: `Can't update set with id: ${id}` });
  }
}

module.exports = {
  all,
  remove,
  save,
  update,
};
