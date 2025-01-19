const { Router } = require("express");
const {
  getAllStudents,
  getStudentById,
  addNewStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = new Router();

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", addNewStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
