const Enrollment = require("../models/enrollmentModel");
const enrollment = new Enrollment();

async function getAllEnrollments(_, res) {
  const allEnrollments = await enrollment.getAllEnrollments();
  res.send(allEnrollments);
}
async function addNewEnrollment(req, res) {
  const enrollment = req.body;
  const newEnrollment = await enrollment.addNewEnrollment(enrollment);
  res.send(newEnrollment);
}

async function updateEnrollment(req, res) {
  const enrollment = req.body;
  const updatedEnrollment = await enrollment.editEnrollment(enrollment);
  res.send(updatedEnrollment);
}

async function deleteEnrollment(req, res) {
  const enrollmentId = req.params.id;
  const deletedEnrollment = await enrollment.deletedEnrollment(enrollmentId);
  res.send(deletedEnrollment);
}

export {
  getAllEnrollments,
  addNewEnrollment,
  updateEnrollment,
  deleteEnrollment,
};
