const router = require('express').Router();
const ctr = require('../controllers/sets');

router.get('/sets', ctr.all);

module.exports = router;
