const router = require('express').Router();
const pagesCtr = require('../controllers/pages');
const api = require('./api');

router.get('/', pagesCtr.index);
router.get('/sets', pagesCtr.sets);

router.use('/api', api);

module.exports = router;
