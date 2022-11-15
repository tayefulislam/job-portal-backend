const JobInfo = require("../Models/JobInfo");

exports.createJobService = async (job) => {
  const result = await JobInfo.create(job);
  console.log("helo");
  return result;
};
