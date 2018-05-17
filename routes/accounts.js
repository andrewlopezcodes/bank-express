const express = require('express');
const router = express.Router();
cost accountsConstroller = require('../controllers/accounts');

router.get('/accounts', accountsConstroller.index);
router.get('/accounts/:id', accountsConstroller.show);
router.post('/accounts', accountsConstroller.create);
router.put('/accounts/:id', accountsConstroller.update);
router.delete('/accounts/:id', accountsConstroller.destroy);

module.exports = router;
