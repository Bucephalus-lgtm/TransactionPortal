import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css';
import { authenticate, isAuthenticated, signin } from '../../auth';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const isAuth = isAuthenticated();
    const onSubmit = (e) => {
        e.preventDefault();
        signin({ username, password }).then(data => {
            console.log({ data });
            authenticate(data.token, () => {
                console.log({ isAuth });
                navigate('/');
                setUsername('');
                setPassword('');
            });
        });
    }
    return (
        <div>
            <form>
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input type="username" class="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="button-block" onClick={e => onSubmit(e)}>Signin</button>
                <p className='text-center text-redirect' style={{ fontSize: '30px' }}>Not an user? <Link to='/signup'>Signup here</Link> </p>
            </form>
        </div>
    )
}

export default Signin;