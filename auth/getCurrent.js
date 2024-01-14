const { wrapControler } = require('../funcHelpers');

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;

  res.status(200).json({
    email,
    subscription,
  });
};

module.exports = wrapControler(getCurrent);
