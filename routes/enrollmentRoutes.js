const { Router } = require("express");
const {
  getAllEnrollments,
  getEnrollmentById,
  addNewEnrollment,
  updateEnrollment,
  deleteEnrollment,
} = require("../controllers/enrollmentController");

const router = new Router();

router.get("/", getAllEnrollments);
router.get("/:id", getEnrollmentById);
router.post("/", addNewEnrollment);
router.put("/:id", updateEnrollment);
router.delete("/:id", deleteEnrollment);

module.exports = router;
