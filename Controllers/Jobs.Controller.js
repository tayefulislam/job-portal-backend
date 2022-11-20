const {
  createJobService,
  managerJobsService,
} = require("../Services/Jobs.Service");

exports.createJob = async (req, res) => {
  try {
    const job = req.body;
    const result = await createJobService(job);

    res.status(200).json({
      status: "success",
      message: "succesfuly posted new job",
      result: result,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "job post unsuccessful",
      error: error.message,
    });
  }
};

exports.managerJobs = async (req, res) => {
  try {
    const { id } = req.user;
    console.log(id);
    const jobs = await managerJobsService(id);
    res.status(200).json({
      status: "success",
      message: "getting jobs data successful",
      result: jobs,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "Failed to load data",
      error: error.message,
    });
  }
};
