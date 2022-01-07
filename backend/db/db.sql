-- Create database
CREATE DATABASE transaction_db;

-- Transactions table
CREATE TABLE transactions(id SERIAL NOT NULL PRIMARY KEY, amount INT, transaction_type VARCHAR(255), party_name VARCHAR(255) );
INSERT INTO transactions(amount, transaction_type, party_name) VALUES (1000, 'Paid', 'Rakesh');
SELECT  * FROM transactions;

-- Users table
CREATE TABLE users(id SERIAL NOT NULL PRIMARY KEY, full_name VARCHAR(255), username VARCHAR(255), password VARCHAR(255) );
INSERT INTO users(full_name, username, password) VALUES ('Bhargab Nath', 'bhargab', '123456');
SELECT  * FROM users;