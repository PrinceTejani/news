const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "demo",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database as ID " + db.threadId);
});

// Define routes for user registration
app.post("/api/register", (req, res) => {
  const { UserName, Password } = req.body;

  if (!UserName || !Password) {
    return res.status(400).json({ message: "Both username and password are required" });
  }

  const sql = "INSERT INTO res (UserName, Password) VALUES (?, ?)";
  db.query(sql, [UserName, Password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error registering user" });
    }
    res.status(201).json({ message: "User registered successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}