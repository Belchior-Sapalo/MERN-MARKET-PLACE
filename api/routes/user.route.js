const { teste } = require("../controllers/user.controller.js");

const router = require("express").Router()

router.get('/teste', teste)

module.exports = router;