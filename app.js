const express = require("express");
const bodyParser = require("body-parser");
//integrating getDate module that we made
const date = require(__dirname + "/date.js");

const app = express();
//globally define newitem
let newItems = [];
let workItems = [];
//------ ----- --- -->
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  let currentDay = date.getDate();
  res.render("list", { listTitle: currentDay, newListItems: newItems });
});

app.post("/", function (req, res) {
  let newItem = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    newItems.push(newItem);
    res.redirect("/");
  }
});

//work page-->
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

//about page-->
app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(5000, function () {
  console.log("Server is start at port 5000.");
});
