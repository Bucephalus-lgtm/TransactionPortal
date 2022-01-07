require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/user');
const transactionRoutes = require('./routes/transactions');

app.use('/api/auth', userRoutes);
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});