import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/newUser">New User</Link>
      <Link to="/deposit">Deposit</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
