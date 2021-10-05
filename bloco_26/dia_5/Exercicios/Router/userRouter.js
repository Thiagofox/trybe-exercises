const express = require('express');
const router = express.Router();

// metodo mais enxuto
// const express = require('express').router();

const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} = require('../middlewares/validation');

router.post(
  '/register',
  isValidUsername,
  isValidEmail,
  isValidPassword,
  function (_req, res) {
    res.status(201).json({ message: 'user created'});
  },
);

router.post(
  '/login',
  isValidEmail,
  isValidPassword,
  function (_req, res) {
    res.status(200).json({ token: '86567349784e' });
  },
)

module.exports = router;

