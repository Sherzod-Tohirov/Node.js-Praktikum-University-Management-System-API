const Student = require("../models/studentModel");
const student = new Student();

async function getAllStudents(_, res) {
  const allStudents = await student.getAllStudents();
  res.send(allStudents);
}
async function addNewStudent(req, res) {
  const student = req.body;
  const newStudent = await student.addNewStudent(student);
  res.send(newStudent);
}

async function updateStudent(req, res) {
  const student = req.body;
  const updatedStudent = await student.editStudent(student);
  res.send(updatedStudent);
}

async function deleteStudent(req, res) {
  const studentId = req.params.id;
  const deletedStudent = await student.deleteStudent(studentId);
  res.send(deletedStudent);
}

export { getAllStudents, addNewStudent, updateStudent, deleteStudent };
