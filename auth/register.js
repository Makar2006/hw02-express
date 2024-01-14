const bcrypt = require('bcrypt');

const { User } = require('../models/user');
const { Error, wrapControler } = require('../funcHelpers');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw Error(409, 'This email already exists');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports =  wrapControler(register)
;
