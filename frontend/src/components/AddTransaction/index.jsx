import React, { useState } from 'react';
import './AddTransaction.css';

const AddTransaction = ({ onSubmit }) => {
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [partyName, setPartyName] = useState('');

    const clickSubmit = e => {
        e.preventDefault();
        console.log({ transactionType, amount, partyName });
        onSubmit({ transactionType, amount, partyName });
        setAmount('');
    }

    return (
        <div>
            <form onSubmit={e => clickSubmit(e)}>
                <div class="mb-3">
                    <label class="form-label">Transaction Type</label>
                    <input type="text" class="form-control" value={transactionType} onChange={e => setTransactionType(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Amount</label>
                    <input type="number" class="form-control" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Party Name</label>
                    <input type="text" class="form-control" value={partyName} onChange={e => setPartyName(e.target.value)} />
                </div>
                <button type="submit" className='block'><span>Add Transaction</span></button>
            </form>
        </div>
    )
}

export default AddTransaction;