const UserInfo = require("../Models/UserInfo");

exports.createUserService = async (newUser) => {
  const result = await UserInfo.create(newUser);
  return result;
};

exports.isUserService = async (email) => {
  const result = await UserInfo.findOne({ email: email });
  return result;
};
