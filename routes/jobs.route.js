const express = require("express");

const router = express.Router();

const JobsController = require("../Controllers/Jobs.Controller");
const { verifyToken } = require("../middlewares/verifyToken");

router.route("/jobs").post(JobsController.createJob);
router.route("/manager/jobs").get(verifyToken, JobsController.managerJobs);

module.exports = router;
