import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../axios/axiosServices';
import Header from '../components/header';

function NewUser() {
  const initialState = {
    cpf: '', password: '', name: '', deposit: 0,
  };
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    console.log(values); // eslint-disable-line
  };

  const navigate = useNavigate();

  const registerUser = async ({
    name, cpf, password, deposit,
  }) => {
    await register(name, cpf, password, deposit);
    navigate('/login');
  };

  const isNameValid = (name) => name.length > 3;
  const isCpfValid = (cpf) => cpf.length === 11;
  const isPasswordValid = (password) => password.length > 6;

  return (
    <div>
      <Header />
      <h1>Registre-se</h1>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            minLength="3"
            placeholder="Digite seu Nome"
            onChange={onChange}
          />
        </label>
        <label htmlFor="cpf">
          <input
            type="text"
            name="cpf"
            minLength="11"
            maxLength="11"
            placeholder="Digite seu cpf"
            onChange={onChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            minLength="6"
            placeholder="Digite sua senha"
            onChange={onChange}
          />
        </label>
        <label htmlFor="deposit">
          <input
            type="number"
            name="deposit"
            placeholder="Digite seu depósito inicial"
            min="0"
            onChange={onChange}
          />
        </label>
        <button
          type="button"
          onClick={() => registerUser(values)}
          disabled={
            !isNameValid(values.name)
            || !isCpfValid(values.cpf)
            || !isPasswordValid(values.password)
          }
        >
          Registrar

        </button>
      </form>
    </div>
  );
}

export default NewUser;
