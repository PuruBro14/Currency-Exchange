const AdminModel = require("../../../models/Admin.model");
const utilites = require("../../../utils/utility.helper");
const Joi = require("joi");

const adminValidation = Joi.object({
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  username: Joi.string().required().trim().lowercase(),
  email: Joi.string().email().normalize().lowercase().required().trim(),
  password: Joi.string().min(8).max(30).required(),
});

exports.adminResgiter = async (req, res) => {
  const { error, value } = adminValidation.validate(req.body);
  if (error) {
    return utilites.sendErrorResponse(
      res,
      false,
      400,
      "Validation failed.",
      null,
      error.details[0].message
    );
  }
  try {
    let hasAlreadyExists = await AdminModel.findOne({
      email: value.email,
    });
    if (hasAlreadyExists) {
      return utilites.sendSuccessResponse(
        res,
        false,
        200,
        "This email already exists. Please try again new email.",
        null
      );
    }
    const newAdmin = new AdminModel({
      fname: value.fname,
      lname: value.lname,
      username: value.username,
      email: value.email,
      password: value.password,
    });
    await newAdmin.save();
    return utilites.sendSuccessResponseWithData(
      res,
      true,
      201,
      "Admin Register Succesfully.",
      newAdmin
    );
  } catch (error) {
    return utilites.internalErrorResponse(
      res,
      false,
      500,
      "Internal Server Error.",
      null,
      error.message
    );
  }
};
