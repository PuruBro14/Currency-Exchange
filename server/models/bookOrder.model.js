const mongoose = require("mongoose");
const { ORDER_STATUS } = require("../utils/constantValue.helper");

const bookSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
      trim: true,
    },
    from: {
      type: String,
      required: true,
      trim: true,
    },
    to: {
      type: String,
      required: true,
      trim: true,
    },
    currentRate: {
      type: Number,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("orders", bookSchema);

module.exports = BookModel;
