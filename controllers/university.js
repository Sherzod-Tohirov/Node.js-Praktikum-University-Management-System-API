const University = require("../models/university");
const university = new University();

async function getAllStudents(_, res) {
  const allStudents = await university.getAllStudents();
  res.send(allStudents);
}

function getMainPage(_, res) {
  res.send("<h1>University home page</h1>");
}

module.exports = {
  getMainPage,
  getAllStudents,
};
