const express = require("express");
const app = express();
const path = require('path');
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  express.static(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/MyWapProjects/Day14/public"
  )
);

app.get("/", (req, res, next) => {
    console.log('first get');
  res.sendFile(
    "C:/Users/Hermon AW/Desktop/MIU/WAP/MyWapProjects/Day14/public/apod.html"
  );
  next();
});
app.post("/submit", (req, res) => {
  console.log(req.query);
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
