const UserInfo = require("../Models/UserInfo");

exports.createUserService = async (newUser) => {
  const result = await UserInfo.create(newUser);
  return result;
};
