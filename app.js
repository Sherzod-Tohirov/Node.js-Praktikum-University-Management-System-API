const express = require("express");
const app = express();
const PORT = 3000;
const universityRoutes = require("./routes/university");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");

app.use(express.urlencoded({ extended: false }));

app.use("/", universityRoutes);
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/enrollments", enrollmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
