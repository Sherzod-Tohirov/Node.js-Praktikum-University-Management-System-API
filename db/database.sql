-- to apply uuid in project
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- courses table creation
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  course_name VARCHAR(255) NOT NULL, 
  instructor VARCHAR(255) NOT NULL, 
  schedule VARCHAR(255) NOT NULL, 
  max_students INTEGER, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP DEFAULT NULL
);


-- students table creation
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  name VARCHAR(255) NOT NULL, 
  age INTEGER,
  course_of_study VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP DEFAULT NULL
)

-- enrollments table creation
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
  student_id UUID REFERENCES students(id), 
  course_id UUID REFERENCES courses(id), 
  entrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP DEFAULT NULL
)

--insert example data
INSERT INTO courses (id, course_name, instructor, schedule, max_students) VALUES ('95b03502-4ce3-4dd3-90e8-11836029fad7','Introduction to Computer Science', 'Dr. Jane Smith', 'Mon-Wed-Fri 10:00-11:00 AM', 30);
INSERT INTO students (id, name, age, course_of_study) VALUES ('90c53502-4ce3-4dd3-90e8-11836029fad7','Toshev Davron', 24, 'Applied Mathematics');
INSERT INTO enrollments (id, student_id, course_id) VALUES ('80c53502-4ce3-4dd3-90e8-12055029fad7','90c53502-4ce3-4dd3-90e8-11836029fad7', '95b03502-4ce3-4dd3-90e8-11836029fad7');


-- update courses table data

-- {
--   "course_name": "Introduction to Computer Science",
--   "instructor": "Dr. John Doe",
--   "schedule": "Tue-Thu 2:00-3:30 PM",
--   "max_students": 35
-- }

UPDATE courses SET instructor = 'Dr. John Doe', schedule = 'Tue-Thu 2:00-3:30 PM', max_students = 35 WHERE id = '95b03502-4ce3-4dd3-90e8-11836029fad7'


-- delete course data
DELETE FROM courses WHERE id = '95b03502-4ce3-4dd3-90e8-11836029fad7'


--- Murakkab WHERE bandi so'rovlari

-- Muayyan o'qituvchi tomonidan o'qitiladigan barcha kurslarni oling. 
SELECT * FROM courses WHERE instructor = 'Dr. Jane Smith';
-- Muayyan jadval oralig'ida kurslarga yozilgan barcha talabalarni oling. 
SELECT students.* from students JOIN enrollments ON students.id = entrollments.student_id WHERE enrollments.enrollment_date BETWEEN '2024-01-01' AND '2025-01-01';
-- Belgilangan raqamdan past bo'lgan barcha kurslarni oling. 
SELECT * FROM courses WHERE max_students < 30;
-- Ma'lum miqdordagi kurslarga ro'yxatdan o'tgan barcha talabalarni oling.
SELECT students.* FROM students JOIN enrollments ON students.id = enrollments.student_id JOIN courses ON enrollments.course_id = courses.id where courses.max_students = 30;
