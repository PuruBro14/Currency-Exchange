const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    currencyData: [
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
      },
    ],
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("orders", bookSchema);

module.exports = BookModel;
