const JobInfo = require("../Models/JobInfo");

exports.createJobService = async (job) => {
  const result = await JobInfo.create(job);
  console.log("helo");
  return result;
};

exports.managerJobsService = async (id) => {
  console.log(id);
  const result = await JobInfo.find({ "managerId.id": id });
  return result;
};
