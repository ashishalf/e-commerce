const User = require('../models/userModel');

const admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (user && user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Not authorized as admin' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = admin;
