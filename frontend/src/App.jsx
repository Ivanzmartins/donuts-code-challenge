import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import NewUser from './pages/newUser';
import Deposit from './pages/deposit';
import Login from './pages/login';
import User from './pages/userPage';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<NewUser />} />
        <Route exact path="/deposit" element={<Deposit />} />
        <Route
          exact
          path="/login/*"
          element={(
            <UserProvider value={{}}>
              <Login />
            </UserProvider>
          )}
        />
        <Route
          path="/user/:id"
          element={(
            <UserProvider value={{}}>
              <User />
            </UserProvider>
          )}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
