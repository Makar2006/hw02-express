const express = require('express');

const { register, login, logout, getCurrent } = require('../../auth');

const { validateBody, authenticate } = require('../../middlewares');

const { schemas } = require('../../models/user');

const router = express.Router();

// signup
router.post('/register', validateBody(schemas.registerSchema), register);

// signin
router.post('/login', validateBody(schemas.loginSchema), login);

router.get('/current', authenticate, getCurrent);

router.post('/logout', authenticate, logout);

module.exports = router;