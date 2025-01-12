const pool = require("../db/config");

class University {
  constructor(id) {
    this.id = id;
  }

  async getAllStudents() {
    try {
      const result = await pool.query("SELECT * from students");
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllCourses() {
    try {
      const result = await pool.query("SELECT * from courses");
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = University;
