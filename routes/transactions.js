const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactions');

router.get('/accounts/:account_id/transactions', transactionController.index);
router.get('/transacions/:transaction_id', transactionController.show)
router.post('/accounts/:account_id/transactions', transactionController.create);
router.put('/transactions/:transaction_id', transactionController.update);
router.delete('/transactions/:transaction_id', transactionController.destroy);

module.exports = router;
