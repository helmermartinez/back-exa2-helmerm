const express = require('express');
const router = express.Router();

const titularCtr = require('../controllers/titulares.controller')
const {checkTokenUser} = require('../auth/token_validation');

router.get('/', checkTokenUser, titularCtr.readAllTitular);
router.post('/create', checkTokenUser, titularCtr.createTitular);
router.delete('/delete/:id', checkTokenUser, titularCtr.deleteTitular);
router.put('/update/:id', checkTokenUser, titularCtr.updateTitular);

module.exports = router;