//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

//creating app
const app = express();
const port = process.env.PORT || 3339;

// routes
const index = require("./routes/index.routes");
const postRouter = require("./routes/posts.routes");
const ongRouter = require("./routes/ong.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use(express.json({ type: "application/vnd.api+json" }));

app.use(morgan("dev"));

// database connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(index);
app.use("/api/post/", postRouter);
app.use("/api/ong/", ongRouter);

// starting server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
