const db = require('../db');

exports.showTransactions = async (req, res) => {
    try {
        const sql = 'SELECT * FROM transactions';
        const transactions = await db.query(sql);
        console.log({ res: transactions.rows });
        return res.json({
            results: transactions.rows.length,
            status: 'success',
            transactions: transactions.rows
        });
    } catch (err) {
        console.log(err.message);
        return res.json({ message: err.message });
    }
}

exports.getTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = 'SELECT * FROM transactions WHERE id = $1';
        const transaction = await db.query(sql, [id]);
        return res.json({
            status: 'success',
            transaction: transaction.rows
        });
    } catch (err) {
        console.log(err.message);
        return res.json({ message: err.message });
    }
}

exports.createTransaction = async (req, res) => {
    try {
        const { amount, transaction_type, party_name } = req.body;
        const sql = 'INSERT INTO transactions(transaction_type, amount, party_name) VALUES ($1, $2, $3) RETURNING *';
        const transaction = await db.query(sql, [transaction_type, amount, party_name]);
        return res.json({ transaction: transaction.rows[0] });
    } catch (err) {
        console.log(err.message);
        return res.json({ message: err.message });
    }
}