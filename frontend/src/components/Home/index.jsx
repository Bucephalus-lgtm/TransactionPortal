import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Transactions from '../Transactions';
import AddTransaction from '../AddTransaction';
import Header from '../Header';
import { API } from '../../config';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTransactions = async () => {
            setLoading(true);
            const res = await axios.get(`${API}/transactions`);
            console.log({ transactions: res.data.transactions });
            setTransactions(res.data.transactions);
            setLoading(false);
        };

        fetchTransactions();
    }, []);

    const onSubmit = ({ transactionType, amount, partyName }) => {
        console.log({ transactionType, amount, partyName });
        if (transactionType === '' || amount == '' || partyName === '') {
            alert('Please fill the form!');
            return;
        }
        axios.post(`${API}/transactions`, { transaction_type: transactionType, amount, party_name: partyName }).then(res => {
            console.log(res.data.transaction);
            navigate('/');
            setTransactions(prevState => [...prevState, res.data.transaction]);
        });
    }

    return (
        <div className='container'>
            <Header />
            <h2>Add Transaction</h2>
            <AddTransaction onSubmit={onSubmit} />
            <Transactions transactions={transactions} loading={loading} />
        </div>
    )
}

export default Home;