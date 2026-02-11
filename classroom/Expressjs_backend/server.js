const fs = require("fs").promises;
const express = require("express");
const app = express();

app.use(express.json())

const PORT= 8000;
app.listen(PORT, () => {
  console.log("Server is listening on port:8000");
});


//READ
const readStudentsFromFile = async () => {
  const data = await fs.readFile("./students.json", "utf-8");
  return JSON.parse(data || "[]");
};


// WRITE
const writeStudentsToFile = async (records) => {
  await fs.writeFile("./students.json", JSON.stringify(records, null, 2));
};


// GET
app.get("/students", async (req, res) => {
  try {
    const students = await readStudentsFromFile();
    return res.status(200).json(students);

  } catch (error) {
    console.log("ERROR:", error.message);

    return res.status(500).json({
      message: "Unable to read students file",
      error: error.message
    });
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const students = await readStudentsFromFile();

    const student = students.find((s) => s.id === userId);

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    return res.status(200).json(student);

  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});


//POST
app.post("/students/register", async (req, res) => {
  try {
    const { name, branch } = req.body;

    if (!name || !branch) {
      return res.status(400).json({ message: "Name and branch required" });
    }

    const students = await readStudentsFromFile();

    const newStudent = {
      id: students.length ? students[students.length - 1].id + 1 : 1,
      name,
      branch,
    };

    students.push(newStudent);
    await writeStudentsToFile(students);

    return res.status(201).json({
      message: "Student added successfully",
      student: newStudent,
    });
  } catch {
    return res.status(500).send("Internal Server Error");
  }
});

// PUT
app.put("/students/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Empty body not allowed" });
    }

    const existingStudents = await readStudentsFromFile();

    const foundIndex = existingStudents.findIndex((s) => s.id === userId);
    if (foundIndex === -1) {
      return res.status(404).send("Student not found");
    }

    existingStudents[foundIndex] = {
      ...existingStudents[foundIndex],
      ...req.body,
    };

    await writeStudentsToFile(existingStudents);

    return res.status(200).json({
      message: "Updated Successfully",
      student: existingStudents[foundIndex],
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

//delete 
app.delete("/students/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    const existingStudents = await readStudentsFromFile();

    const foundIndex = existingStudents.findIndex((s) => s.id === userId);
    if (foundIndex === -1) {
      return res.status(404).send("Student not found");
    }

    const deletedStudent = existingStudents.splice(foundIndex, 1);

    await writeStudentsToFile(existingStudents);

    return res.status(200).json({
      message: "Student deleted successfully",
      deletedStudent: deletedStudent[0],
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});