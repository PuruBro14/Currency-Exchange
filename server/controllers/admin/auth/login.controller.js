const AdminModel = require("../../../models/Admin.model");
const { generateAccessToken } = require("../../../utils/generateToken");
const {
  internalErrorResponse,
  sendSuccessResponse,
  sendErrorResponse,
} = require("../../../utils/utility.helper");
const Joi = require("joi");

const loginValidation = Joi.object({
  email: Joi.string().email().required().normalize().lowercase(),
  password: Joi.string().min(8).max(30).required(),
});

exports.adminLogin = async (req, res) => {
  const { error, value } = loginValidation.validate(req.body);
  if (error) {
    return sendErrorResponse(
      res,
      false,
      400,
      "Validation failed.",
      error.details[0].message
    );
  }
  try {
    const adminDetails = await AdminModel.findOne({
      email: value.email,
    }).select("+password");

    if (!adminDetails) {
      return sendErrorResponse(
        res,
        false,
        400,
        "Credentials Errors.",
        null,
        "Invalid email or password."
      );
    }
    const info = {
      _id: adminDetails._id,
      name: adminDetails.name,
      email: adminDetails.email,
      role: adminDetails.role,
      createdAt: adminDetails.createdAt,
      updatedAt: adminDetails.updatedAt,
    };
    let accessToken = await generateAccessToken(info);

    return sendSuccessResponse(res, true, 200, "Login successfully.", {
      adminDetails: adminDetails,
      accessToken,
    });
  } catch (error) {
    return internalErrorResponse(
      res,
      false,
      500,
      "Internal Server Error",
      null,
      error.message
    );
  }
};
