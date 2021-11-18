const express = require('express');
const router = express.Router();

const userCtr = require('../controllers/user.controller')

router.post('/create', userCtr.createUser);

module.exports = router;