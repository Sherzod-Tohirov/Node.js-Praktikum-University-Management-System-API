const Course = require("../models/courseModel");
const course = new Course();

async function getAllCourses(_, res) {
  const allCourses = await course.getAllCourses();
  res.send(allCourses);
}

async function getCourseById(req, res) {
  const courseId = req.params.id;
  const course = await course.getCourseById(courseId);
  res.send(course);
}

async function addNewCourse(req, res) {
  const course = req.body;
  const newCourse = await course.addNewCourse(course);
  res.send(newCourse);
}

async function updateCourse(req, res) {
  const course = req.body;
  const updatedCourse = await course.editCourse(course);
  res.send(updatedCourse);
}

async function deleteCourse(req, res) {
  const courseId = req.params.id;
  const deletedCourse = await course.deleteCourse(courseId);
  res.send(deletedCourse);
}

module.exports = {
  getAllCourses,
  getCourseById,
  addNewCourse,
  updateCourse,
  deleteCourse,
};
