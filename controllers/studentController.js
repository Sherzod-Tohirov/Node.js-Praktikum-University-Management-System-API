const University = require("../models/university");
const university = new University();

async function getAllStudents(_, res) {
  const allStudents = await university.getAllStudents();
  res.send(allStudents);
}
async function addNewStudent(req, res) {
  const student = req.body;
  const newStudent = await university.addNewStudent(student);
  res.send(newStudent);
}

async function updateStudent(req, res) {
  const student = req.body;
  const updatedStudent = await university.editStudent(student);
  res.send(updatedStudent);
}

async function deleteStudent(req, res) {
  const studentId = req.params.id;
  const deletedStudent = await university.deleteStudent(studentId);
  res.send(deletedStudent);
}

export { getAllStudents, addNewStudent, updateStudent, deleteStudent };
