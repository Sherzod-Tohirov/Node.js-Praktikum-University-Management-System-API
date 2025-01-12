const University = require("../models/university");
const university = new University();

async function getAllStudents(_, res) {
  const allPatients = await university.getAllCourses();
  res.send(allPatients);
}

async function getAllCourses(_, res) {
  const allAppointments = await university.getAllCourses();
  res.send(allAppointments);
}

function getMainPage(_, res) {
  res.send("<h1>University home page</h1>");
}

module.exports = {
  getMainPage,
  getAllStudents,
  getAllCourses,
};
