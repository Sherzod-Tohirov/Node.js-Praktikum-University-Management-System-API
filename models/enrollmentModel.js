const pool = require("../db/config");

class Enrollment {
  constructor(id) {
    this.id = id;
  }

  async getAllEnrollments() {
    try {
      const result = await pool.query("SELECT * from enrollments");
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }

  async addNewEnrollment(enrollment) {
    try {
      const result = await pool.query(
        "INSERT INTO enrollments (student_id, course_id) VALUES ($1, $2) RETURNING *",
        [enrollment.student_id, enrollment.course_id]
      );
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async updateEnrollment(enrollment) {
    const result = await pool.query(
      "UPDATE enrollments SET student_id = $1, course_id = $2 WHERE id = $3 RETURNING *",
      [enrollment.student_id, enrollment.course_id, enrollment.id]
    );
    return result.rows[0];
  }

  async deleteEnrollment(enrollmentId) {
    try {
      const result = await pool.query(
        "DELETE * from enrollments WHERE id = $1 RETURNING *",
        [enrollmentId]
      );
      return result.rows[0];
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Enrollment;
