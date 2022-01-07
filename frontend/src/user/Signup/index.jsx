import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

import { authenticate, signup } from '../../auth';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        signup({ fullName, username, password }).then(data => {
            console.log({ data });
            authenticate(data.token, () => {
                navigate('/');
                setFullName('');
                setUsername('');
                setPassword('');
            });
        });
    }
    return (
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="username" class="form-control" value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input type="username" class="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="button-block">Signup</button>
                <p className='text-center text-redirect' style={{ fontSize: '30px' }}>Already an user? <Link to='/signin'>Signin here</Link> </p>
            </form>
        </div>
    )
}

export default Signup;