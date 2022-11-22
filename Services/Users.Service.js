const UserInfo = require("../Models/UserInfo");

exports.createUserService = async (newUser) => {
  const result = await UserInfo.create(newUser);
  return result;
};

exports.isUserService = async (email) => {
  const result = await UserInfo.findOne({ email: email });
  return result;
};

exports.getAllUserService = async () => {
  const result = await UserInfo.find({});
  return result;
};

exports.getMeService = async (email) => {
  const user = await UserInfo.findOne({ email: email });
  return user;
};
