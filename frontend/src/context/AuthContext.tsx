import { ReactNode, createContext, useEffect, useState } from 'react';
import { baseURL } from '../libs/axios';
import { toast } from 'sonner';

interface AuthContextData {
  handleSignin: (token: string) => void;
  handleLogin: (token: string) => void;
  handleLogout: () => void;
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');

    if (token) {
      baseURL.defaults.headers.Authorization = `Bearer ${token}`;

      setAuthenticated(true);

      return;
    }

    setAuthenticated(false);
  }, []);

  const handleSignin = async (token: string) => {
    localStorage.setItem('TOKEN', token);

    baseURL.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);
  };

  const handleLogin = async (token: string) => {
    localStorage.setItem('TOKEN', token);

    baseURL.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);
  };

  const handleLogout = async () => {
    localStorage.removeItem('TOKEN');

    baseURL.defaults.headers.Authorization = '';

    setAuthenticated(false);

    toast.success('Logout realizado com sucesso');
  };

  return (
    <AuthContext.Provider
      value={{
        handleSignin,
        handleLogin,
        handleLogout,
        authenticated,
        setAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
