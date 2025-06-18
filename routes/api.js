const router = require('express').Router();
const ctr = require('../controllers/sets');

router.get('/sets', ctr.all);
router.delete('/sets/:id', ctr.remove);
router.post('/sets/', ctr.save);
router.patch('/sets/:id', ctr.update);

module.exports = router;
