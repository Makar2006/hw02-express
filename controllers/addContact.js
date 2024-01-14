const { Contact } = require('../models/contacts');
const { wrapControler } = require('../funcHelpers');

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = wrapControler(addContact);
