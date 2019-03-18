const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'app')));



// Define path routes here

// Define any path routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+ "/index.html"));
  res.sendFile(path.join(__dirname+ "/img/20190302_130433 (2).jpg"));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});