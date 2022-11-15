const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// jobs route
const jobsRoute = require("./routes/jobs.route");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use("/api/v1/", jobsRoute);

module.exports = app;
