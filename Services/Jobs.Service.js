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

exports.managerJobByIdService = async (id) => {
  const result = await JobInfo.find({ _id: id }).sort({ _id: -1 });

  return result;
};

// candidate services
exports.getAllJobsService = async () => {
  const result = await JobInfo.find({}).sort({ _id: -1 });

  return result;
};

exports.getJobDetailsByIdService = async (id) => {
  const result = await JobInfo.findById({ _id: id }).populate("UserInfo");
};
