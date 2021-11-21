const express = require('express');
const router = express.Router();

const titularCtr = require('../controllers/titulares.controller')
const {checkTokenUser} = require('../auth/token_validation');

router.get('/',  titularCtr.readAllTitular);
router.post('/create',  titularCtr.createTitular);
router.delete('/delete/:id',  titularCtr.deleteTitular);
router.put('/update/:id',  titularCtr.updateTitular);

module.exports = router;