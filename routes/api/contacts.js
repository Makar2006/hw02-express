const express = require('express');

const {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateContactStatus,
} = require('../../controllers');

const router = express.Router();

const { validation, isValid, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/contact');

router.get('/', authenticate, getAllContacts);

router.get('/:id', authenticate, isValid, getContactById);

router.post('/', authenticate, validation(schemas.addSchema), addContact);

router.put(
  '/:id',
  authenticate,
  isValid,
  validation(schemas.addSchema),
  updateContact
);

router.patch(
  '/:id/favorite',
  authenticate,
  isValid,
  validation(schemas.updateFavoriteSchema),
  updateContactStatus
);

router.delete('/:id', authenticate, isValid, removeContact);

module.exports = router;
