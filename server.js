let express = require("express");
var path = require("path");
// const router = require("express").Router();

let PORT = process.env.PORT || 3000

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//routes
// app.use(require("./routes/html-routes"));

// app.get("/", (req, res) => {
//   //   res.render("login");
//   // res.send("hello world");
//   // res.sendFile(path.join(__dirname, "/public/index.html"));
//   console.log("hello")
// });

app.get("/about", (req, res) => {
  // res.json("hihihi");
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/contact", (req, res) => {
  // res.json("hihihi");
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});