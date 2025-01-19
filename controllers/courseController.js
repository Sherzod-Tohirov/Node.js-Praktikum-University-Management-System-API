const University = require("../models/university");
const university = new University();

async function getAllCourses(_, res) {
  const allCourses = await university.getAllCourses();
  res.send(allCourses);
}

async function addNewCourse(req, res) {
  const course = req.body;
  const newCourse = await university.addNewCourse(course);
  res.send(newCourse);
}

async function updateCourse(req, res) {
  const course = req.body;
  const updatedCourse = await university.editCourse(course);
  res.send(updatedCourse);
}

async function deleteCourse(req, res) {
  const courseId = req.params.id;
  const deletedCourse = await university.deleteCourse(courseId);
  res.send(deletedCourse);
}

module.exports = {
  getAllCourses,
  addNewCourse,
  updateCourse,
  deleteCourse,
};
