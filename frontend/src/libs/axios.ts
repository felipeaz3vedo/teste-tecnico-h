import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:5000'
});

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export const signin = async (registerData: RegisterData) => {
  const { data } = await baseURL.post('/auth/register', registerData);

  const { accessToken } = data;

  return accessToken;
};

export const login = async (loginData: LoginData) => {
  const { data } = await baseURL.post('/auth/login', loginData);

  const { accessToken } = data;

  return accessToken;
};

export const getTransactions = async (seller?: string) => {
  const { data } = await baseURL.get('/transactions', { params: { seller } });

  return data;
};

export const uploadTransactions = async (formData: FormData) => {
  await baseURL.post('/transactions/upload', formData);
};
