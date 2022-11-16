const { createUserService } = require("../Services/Users.Service");

exports.createUser = async (req, res, next) => {
  try {
    const newUser = req.body;

    const createNewUser = await createUserService(newUser);
    res.status(200).json({
      status: "success",
      message: "Successfuly created new user",
      createNewUser,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "Could not create the user",
      error: error.message,
    });
  }
};
