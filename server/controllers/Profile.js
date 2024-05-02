const Profile = require("../models/Profile");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const mailSender = require("../utils/mailSender");

exports.getProfileDetails = async (req, res) => {
  try {
    const id = req.user.id;
    const userDetails = await User.findById(id);
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }
    const profile = await Profile.findById(userDetails.additionalDetails);
    if (!profile) {
      return res.status(400).json({
        success: false,
        message: "Profile not found",
        data: null,
      });
    }

    let modifiedData = {
      _id: userDetails._id,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      dateOfBirth: profile.dateOfBirth,
      gender: profile.gender,
    };
    return res.status(200).json({
      success: true,
      message: "Profile details fetched successfully",
      data: modifiedData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const {
      dateOfBirth = "",
      firstName,
      lastName,
      gender,
      contactNumber,
    } = req.body;

    const id = req.user.id;

    const userDetails = await User.findById(id);
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }
    const profile = await Profile.findById(userDetails.additionalDetails);

    userDetails.firstName = firstName;
    userDetails.lastName = lastName;
    profile.dateOfBirth = dateOfBirth;
    profile.gender = gender;
    profile.contactNumber = contactNumber;
    await userDetails.save();
    await profile.save();

    let modifiedFields = {
      _id: profile._id,
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      dateOfBirth: profile.dateOfBirth,
      gender: profile.gender,
      contactNumber: profile.contactNumber,
    };

    return res.json({
      success: true,
      message: "Profile updated successfully",
      profile: modifiedFields,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.user.id });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User deleted successfully",
      });
    }

    await Profile.findByIdAndDelete({ _id: user.additionalDetails });

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User cannot be deleted successfully",
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const userDetails = await User.findById(req.user.id);

    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "The password is incorrect",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(401).json({
        success: false,
        message: "The password and confirm password does not match",
      });
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    );

    try {
      const emailResponse = await mailSender(
        updatedUserDetails.email,
        "Password Update",
        "Password updated successfully"
      );
    } catch (error) {
      console.log("Error occured while sending mail", error);

      return res.status(500).json({
        success: false,
        message: "Error occured while sending mail",
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error occured while updating password",
      error: err.message,
    });
  }
};
