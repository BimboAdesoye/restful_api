const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postRouter = require("./router/postRouter");
const port = process.env.PORT || 7070;
const cors = require("cors");

// Config dotenv
require("dotenv").config();
app.use(cors());
app.use(express.json());

// Environmental variable
const mongoDB_url = process.env.DBURL;

// Connecting to mongoDB using mongoose
mongoose
  .connect(mongoDB_url)
  .then(() => {
    console.log("DB connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
// =========================================

// Routes
app.use("/posts", postRouter);
// =========================================

// Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// =========================================
