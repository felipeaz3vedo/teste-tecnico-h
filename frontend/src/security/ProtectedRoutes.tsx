import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const ProtectedRoutes = () => {
  const { authenticated } = useAuth();

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};
