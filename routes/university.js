const { Router } = require("express");
const router = new Router();

const { getMainPage } = require("../controllers/university");


router.get("/", getMainPage);

module.exports = router;
