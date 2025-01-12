const { Router } = require("express");

const {
  getMainPage,
  getAllStudents,
  getAllCourses,
} = require("../controllers/university");

const router = new Router();

router.get("/", getMainPage);
router.get("/all-students", getAllStudents);
router.get("/all-courses", getAllCourses);

module.exports = router;
