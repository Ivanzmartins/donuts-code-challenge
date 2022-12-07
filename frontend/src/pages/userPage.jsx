import React, { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';

function User() {
  const teste = useContext(UserContext);
  const imprimeContext = () => {
    console.log(teste.user); // eslint-disable-line no-console
  };
  useEffect(() => {});
  return (
    <div>
      <h1>User</h1>
      <button type="button" onClick={imprimeContext}>Imprime Context</button>
    </div>
  );
}

export default User;
