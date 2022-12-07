import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/register">Registrar</Link>
      <Link to="/deposit">Depositar</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
