import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">
          <input type="text" name="username" placeholder="Digite seu cpf" />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Digite sua senha" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
