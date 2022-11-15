const express = require("express");

const router = express.Router();

const JobsController = require("../Controllers/Jobs.Controller");

router.route("/jobs").post(JobsController.createJob);

module.exports = router;
