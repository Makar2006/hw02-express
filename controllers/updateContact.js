const { Contact } = require('../models/contacts');

const { Error, wrapControler } = require('../funcHelpers');

const updateContact = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!result) {
    throw Error(404, 'Not Found');
  }
  res.json(result);
};

module.exports = wrapControler(updateContact);
