const router = require('express').Router();
const ctr = require('../controllers/sets');

router.get('/sets', ctr.all);
router.delete('/sets/:id', ctr.remove);

module.exports = router;
