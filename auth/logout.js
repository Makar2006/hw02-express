const { User } = require('../models/user');

const { wrapControler } = require('../funcHelpers');

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: '' });

  res.status(204).json({});
};

module.exports = wrapControler(logout);
