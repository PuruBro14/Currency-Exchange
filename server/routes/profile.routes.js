const express = require("express");
const router = express.Router();
const { SecureAuth } = require("../middleware/jwtVerify");

const {
  deleteAccount,
  updateProfile,
  changePassword,
  getProfileDetails,
} = require("../controllers/Profile");

router.get("/profileDetails", SecureAuth, getProfileDetails);
router.put("/updateProfile", SecureAuth, updateProfile);
router.put("/deleteProfile", SecureAuth, deleteAccount);

module.exports = router;
