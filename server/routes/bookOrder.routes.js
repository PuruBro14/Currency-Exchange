const express = require("express");
const bookRoute = express.Router();
const bookOrderController = require("../controllers/bookController");
const SecureAuth = require("../middleware/jwtVerify");

bookRoute.post("/createOrder",SecureAuth,bookOrderController.createBookOrders);
bookRoute.get("/fetchAllBookOrders",SecureAuth, bookOrderController.getAllOrders);
bookRoute.get(
  "/fetchBookOrderById/:id",SecureAuth,
  bookOrderController.getOrderDetailsById
);
bookRoute.put("/updateBookOrders/:id",SecureAuth, bookOrderController.updateOrderDetails);
bookRoute.delete(
  "/deleteOrderById/:id",
  SecureAuth,
  bookOrderController.deleteOrderDetails
);

module.exports = bookRoute;
