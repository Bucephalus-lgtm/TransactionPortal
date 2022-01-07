import React from 'react';
import Loader from '../Loader';
import './Transactions.css';

const Transactions = ({ transactions, loading }) => {
    if (loading) {
        return <Loader />
    }

    return (
        <table class="table table-light table-striped table-responsive" style={{marginTop: '20px'}}>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Transaction Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Party Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(transaction => (
                        <tr>
                            <th scope="row">1</th>
                            <td>{transaction.transaction_type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.party_name}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Transactions;