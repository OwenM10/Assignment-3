const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");
const expressSession = require("express-session")

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6000;

app.use(expressSession({
  secret:"secret key"
}))

app.listen(PORT, () => {
  console.log("App listening on port ", PORT);
});

app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "index.html"));
    console.log(req.session)

  let beans = req.session.beans;  //user = variable, make sure to use everywhere when needed
  res.render("index", {beans})
});

app.post("/update-index", (req, res)=>{
  console.log(req.body);

  req.session.beans= req.body;

  res.redirect("/") //SEsions stuff
})

app.get("/profile", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
  res.render("profile");
});

app.get("/math", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "math.html"));
  res.render("math");
});

app.get("/profile2 ", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "profile.html"));
  res.render("profile2");
});

app.get("/slide-show", (req, res) => {
  //res.sendFile(path.resolve(__dirname + "/views/", "slide-show.html"));
  res.render("slide-show");
});

app.get("/terms", (req, res) => {
  res.render("terms");
});

app.get("/policy", (req, res) => {
  res.render("policy");
});

app.get("/game", (req, res) => {
  res.render("game");
});
