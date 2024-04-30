const express = require("express");
const adminRoutes = express.Router();
const adminAuthController = require("../controllers/admin/auth");
const ordersController = require("../controllers/admin/orders");
const { SecureAuth, hasAdminRole } = require("../middleware/jwtVerify");

adminRoutes.post("/register", adminAuthController.adminResgiter);
adminRoutes.post("/login", adminAuthController.adminLogin);

//orders
adminRoutes.get(
  "/fetchAllOrders",
  SecureAuth,
  hasAdminRole(),
  ordersController.getAllOrders
);

module.exports = adminRoutes;
