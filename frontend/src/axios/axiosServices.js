import Axios from 'axios';

export const register = async (name, cpf, password, deposit) => {
  const response = await Axios.post('http://localhost:3001/signup', {
    name,
    cpf,
    password,
    deposit,
  });
  return response.data;
};

export const loginAxios = async (cpf, password) => {
  const { data } = await Axios.post('http://localhost:3001/login', {
    cpf,
    password,
  });
  return data;
};

// export const userData = async (token) => {};
