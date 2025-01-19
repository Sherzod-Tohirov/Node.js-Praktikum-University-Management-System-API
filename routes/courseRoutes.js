const { Router } = require("express");
const {
  getAllCourses,
  getCourseById,
  addNewCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const router = new Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", addNewCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
