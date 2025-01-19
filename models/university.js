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

  // Course functions
  async addNewCourse(course) {
    try {
      const result = await pool.query(
        "INSERT INTO courses (course_name, instructor, schedule, max_students) VALUES ($1, $2, $3, $4) RETURNING *",
        [
          course.course_name,
          course_instructor,
          course.schedule,
          course.max_students,
        ]
      );
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async editCourse(course) {
    try {
      const result = await pool.query(
        "UPDATE courses SET course_name = $1, instructor = $2, schedule = $3, max_students = $4 WHERE id = $5 RETURNING *",
        [
          course.course_name,
          course.instructor,
          course.schedule,
          course.max_students,
          course.id,
        ]
      );
      return result.rows[0];
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCourse(courseId) {\
    try {
      const result = await pool.query("DELETE FROM courses WHERE id = $1 RETURNING *", [courseId]);
      return result.rows[0];

    }catch(err) {
      console.log(err);
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
