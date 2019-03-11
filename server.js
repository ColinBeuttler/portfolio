const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

<<<<<<< HEAD
// app.use(express.static(path.join(__dirname, 's')));
=======
// app.use(express.static(path.join(__dirname, 'app')));
>>>>>>> b02c4d342df52a539ee675685cebfe47aadb811d



// Define path routes here

// Define any path routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+ "/public/index.html"));
<<<<<<< HEAD
  // res.sendFile(path.join(__dirname+ "/src"));
=======
//   res.sendFile(path.join(__dirname, "/src/app.js"));
>>>>>>> b02c4d342df52a539ee675685cebfe47aadb811d
});


app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});