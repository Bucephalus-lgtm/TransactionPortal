import { API } from '../config';

export const signup = user => {
    return fetch(`${API}/auth/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const signin = user => {
    return fetch(`${API}/auth/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('authUser', JSON.stringify(data));
        next();
    }
};

export const signout = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('authUser');
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('authUser')) {
        return JSON.parse(localStorage.getItem('authUser'));
    } else {
        return false;
    }
};
