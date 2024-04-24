const joi = require("joi");
const mailSender = require("../../utils/mailSender");
const contactUsTemplate = require("../../views/contact_us");
const utilityHelper = require("../../utils/utility.helper");

const contactUsSchema = joi.object().keys({
  name: joi.string().min(2).max(100).required(),
  email: joi.string().email().required().lowercase(),
  message: joi.string().required(),
});

exports.contactUsTemplate = async (req, res) => {
  const { error, value } = contactUsSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
      data: null,
    });
  }
  try {
    let contactTemplates = await contactUsTemplate(
      value.name,
      value.email,
      "sd",
      value.message
    );
    await mailSender(
      value.email,
      "Thankyou for contacting us.",
      contactTemplates
    );
    await utilityHelper.sendSuccessResponse(
      res,
      true,
      200,
      "Email sent succesfully."
    );
  } catch (error) {
    console.log("sending email error: " + error.message);
    await utilityHelper.internalErrorResponse(
      res,
      false,
      500,
      "Internal Server Error.",
      null,
      { message: error.message }
    );
  }
};
