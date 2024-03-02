const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const connection = require("./database");
const alert = require("alert")

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
      res.render("index");
});
app.get("/home", (req, res) => {
  res.render("home")
})

app.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let loginid = req.body.id

  try {
    if (
      (loginid === "1JT20CS403" &&
        username === "IEEELOG" &&
        password === "IEEE24CS") ||
      (loginid === "1JT21EC055" &&
        username === "IEEELOG" &&
        password === "IEEE24CS") ||
      (loginid === "1JT22EC089" &&
        username === "IEEELOG" &&
        password === "IEEE24CS") ||
      (loginid === "1JT20EC130" &&
        username === "IOTECHLOG" &&
        password === "IOTECHCLUB23EC") ||
      (loginid === "1JT21CS098" &&
        username === "TECHNOCLUBLOG" &&
        password === "TECHNOCLUB21CS") ||
      (loginid === "1JT21CS122" &&
        username === "TECHNOCLUBLOG" &&
        password === "TECHNOCLUB21CS") ||
      (loginid === "1JT23CS022" &&
        username === "TECHNOCLUBLOG" &&
        password === "TECHNOCLUB21CS") ||
      (loginid === "1JT23EC116" &&
        username === "IOTECHLOG" &&
        password === "IOTECHCLUB23EC")
    ) {
      res.render("home");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/home", (req, res) => {
  const { query } = req.body;
  connection.query(query, (err, result) => {
    if (err) {
      res.render("error", {
        message: "An error occurred while executing the query.",
      });
    } else {
      res.render("query-result", { result });
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});