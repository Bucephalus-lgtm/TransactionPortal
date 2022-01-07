import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem('authUser');
    const onClick = () => {
        console.log({ isAuthFromSignout: isAuth });

        if (typeof window !== 'undefined') {
            localStorage.removeItem('authUser');
            navigate('/signin');
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Transaction Portal</Link>
                    <a class="button" onClick={onClick} style={{ cursor: 'pointer' }}>
                        <img src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg" />
                        <div class="logout">LOGOUT</div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header;