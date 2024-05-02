const BookModel = require("../../models/bookOrder.model");
const { bookValidation } = require("../../utils/validation");
const mongoose = require("mongoose");

exports.createBookOrders = async (req, res) => {
  // let loginId = req.user.id;
  const { error, value } = bookValidation.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }
  try {
    if (!mongoose.isValidObjectId(value.userId)) {
      return res.status(400).json({
        success: false,
        message: `Please provide valid user id.`,
      });
    }
    let createOrder = await BookModel.create({
      userId: value.userId,
      currencyData: value.currencyData,
    });

    return res.status(201).json({
      success: true,
      message: `Order Successfully Added.`,
      data: createOrder,
    });
  } catch (error) {
    console.log("::===> interla ", error.message);
    return res.status(500).json({
      success: false,
      message: `Internal Server Error.`,
    });
  }
};
