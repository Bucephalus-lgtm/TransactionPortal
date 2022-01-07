import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Signin from './user/Signin';
import Signup from './user/Signup';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  const [authUser, setAuthUser] = useState(null);
  console.log({ authUser });

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    console.log(user);
    user && JSON.parse(user) ? setAuthUser(true) : setAuthUser(false);
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;