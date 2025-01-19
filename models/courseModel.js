const pool = require("../db/config");

class Course {
  constructor(id) {
    this.id = id;
  }
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

  async getCourseById(courseId) {
    try {
      const result = await pool.query("SELECT * from courses WHERE id = $1", [
        courseId,
      ]);
      return result.rows[0];
    } catch (err) {
      console.log(err);
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

  async deleteCourse(courseId) {
    try {
      const result = await pool.query(
        "DELETE FROM courses WHERE id = $1 RETURNING *",
        [courseId]
      );
      return result.rows[0];
    } catch (err) {
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

module.exports = Course;
