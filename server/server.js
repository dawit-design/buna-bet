const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cafe_db",
  password: "bryan@2022",
  port: 5432,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database:", res.rows[0].now);
  }
});

app.get("/", (req, res) => {
  res.send("Hello! this is backend server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
