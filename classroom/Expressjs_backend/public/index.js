const express = require("express");
const path = require("path");

const app = express();

// form data middleware
app.use(express.urlencoded({ extended: true }));

// serve form.html manually
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Student Registered Successfully");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});