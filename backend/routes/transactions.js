const express = require('express');
const router = express.Router();

const TransactionController = require('../controllers/transactions');

router.get('/', TransactionController.showTransactions);
router.get('/:id', TransactionController.getTransaction);
router.post('/', TransactionController.createTransaction);

module.exports = router;