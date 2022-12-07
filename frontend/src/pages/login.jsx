import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import { loginAxios } from '../axios/axiosServices';
import UserContext from '../context/UserContext';

const initialState = { cpf: '', password: '' };

function Login() {
  const [values, setValues] = useState(initialState);
  const [id, setId] = useState(0);
  const [userToken, setUserToken] = useState('');

  const teste = useContext(UserContext);
  const imprimeContext = async () => {
    await teste.updateUser({ id, userToken });
    console.log(teste.user); // eslint-disable-line no-console
  };

  const navigate = useNavigate();

  const goToUserPage = () => {
    navigate(`/user/${id}`);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const loginUser = async (cpf, password) => {
    const { token, userId } = await loginAxios(cpf, password);
    setId(userId);
    setUserToken(token);
    imprimeContext();
  };

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form>
        <label htmlFor="cpf">
          <input
            type="text"
            name="cpf"
            placeholder="Digite seu cpf"
            onChange={onChange}
            value={values.cpf}
          />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Digite sua senha" onChange={onChange} value={values.password} />
        </label>
        <button
          type="button"
          onClick={() => loginUser(values.cpf, values.password)}
          disabled={!(values.cpf.length === 11 && values.password.length >= 6)}
        >
          Logar
        </button>
      </form>
      {/* <button
        type="button"
        onClick={imprimeContext}
      >
        Imprime UserContext
      </button> */}
      <button
        type="button"
        onClick={goToUserPage}
      >
        Ir para página do usuário
      </button>
    </div>
  );
}

export default Login;
