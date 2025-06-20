const express = require('express');
const { register, login, logout, me } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', isAuthenticated, logout);
router.get('/me', isAuthenticated, me);

module.exports = router;