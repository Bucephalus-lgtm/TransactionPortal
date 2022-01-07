const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'transaction_db',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}