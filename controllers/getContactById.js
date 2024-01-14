const { Contact } = require('../models/contacts');
const { Error, wrapControler } = require('../funcHelpers');

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw Error(404, 'Not Found');
  }
  res.status(200).json(result);
};

module.exports = wrapControler(getContactById);
