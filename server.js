var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("./index.html"));


// Define path routes here

// Define any path routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  });
  
