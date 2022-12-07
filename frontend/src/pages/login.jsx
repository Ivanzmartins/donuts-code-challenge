import React, { useState } from 'react';
import Header from '../components/header';
import { loginAxios } from '../axios/axiosServices';

const initialState = { cpf: '', password: '' };

function Login() {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(name, value); // eslint-disable-line
  };

  const loginUser = async ({ cpf, password }) => {
    const { token } = await loginAxios(cpf, password);
    console.log(token); // eslint-disable-line
    return token;
  };

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form>
        <label htmlFor="cpf">
          <input type="text" name="cpf" placeholder="Digite seu cpf" onChange={onChange} value={values.cpf} />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Digite sua senha" onChange={onChange} value={values.password} />
        </label>
        <button type="button" onClick={loginUser}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
