const router = require("express").Router()
const {signup, sigin} = require('../controllers/auth.controller.js')

router.post('/signup', signup);
router.post('/sigin', sigin);

module.exports = router;