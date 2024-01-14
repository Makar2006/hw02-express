const { Contact } = require('../models/contacts');

const { Error, wrapControler } = require('../funcHelpers');

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw Error(404, 'Not Found');
  }
  res.json({
    message: 'contact deleted',
  });
};

module.exports = wrapControler(removeContact);
