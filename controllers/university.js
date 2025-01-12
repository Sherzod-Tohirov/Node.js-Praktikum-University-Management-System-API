const University = require("../models/university");
const university = new University();

async function getAllStudents(_, res) {
  const allStudents = await university.getAllStudents();
  res.send(allStudents);
}

async function getAllCourses(_, res) {
  const allCourses = await university.getAllCourses();
  res.send(allCourses);
}

function getMainPage(_, res) {
  res.send("<h1>University home page</h1>");
}

module.exports = {
  getMainPage,
  getAllStudents,
  getAllCourses,
};
