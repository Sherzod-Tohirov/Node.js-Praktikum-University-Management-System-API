const pool = require("../db/config");

class Student {
  constructor(id) {
    this.id = id;
  }
  async addNewStudent(student) {
    try {
      const result = await pool.query(
        "INSERT INTO students (name, age, course_of_study) VALUES ($1, $2, $3) RETURNING *",
        [student.name, student.age, student.course_of_study]
      );
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async editStudent(student) {
    try {
      const result = await pool.query(
        "UPDATE students SET name = $1, age = $2, course_of_study = $3 WHERE id = $4 RETURNING *",
        [student.name, student.age, student.course_of_study, student.id]
      );
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async deleteStudent(studentId) {
    try {
      const result = await pool.query(
        "DELETE FROM students WHERE id = $1 RETURNING *",
        [studentId]
      );
      return result.rows[0];
    } catch (err) {
      console.log(err);
    }
  }

  async getAllStudents() {
    try {
      const result = await pool.query("SELECT * from students");
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Student;
