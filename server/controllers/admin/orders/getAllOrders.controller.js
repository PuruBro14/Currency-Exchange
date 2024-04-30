const {
  internalErrorResponse,
  sendSuccessResponse,
} = require("../../../utils/utility.helper");

exports.getAllOrders = async (req, res) => {
  try {
    return sendSuccessResponse(res, true, 200, "All orders are fetched.");
  } catch (error) {
    return internalErrorResponse(
      res,
      false,
      500,
      "Internal Server Error.",
      null,
      error.message
    );
  }
};
