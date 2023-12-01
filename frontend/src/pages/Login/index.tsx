import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftCircle as ChevronLeftCircleIcon } from 'lucide-react';

import { LoginForm } from '../../components/LoginForm';
import { SigninForm } from '../../components/SignInForm';
import { useAuth } from '../../hooks/useAuth';

import * as S from './styles';

type FormType = 'login' | 'signin';

export const Login = () => {
  const { authenticated } = useAuth();

  const [formType, setFormType] = useState<FormType>('login');

  const navigate = useNavigate();

  const isLoginForm = formType === 'login';
  const isSigninForm = formType === 'signin';

  useEffect(() => {
    if (authenticated) navigate('/');
  }, [authenticated, navigate]);

  if (!authenticated)
    return (
      <S.Container>
        <S.FormContainer>
          {isLoginForm && (
            <>
              <S.FormTitle>Login</S.FormTitle>

              <LoginForm />

              <S.SigninMessage>
                Ainda não tem uma conta?{' '}
                <span onClick={() => setFormType('signin')}>Cadastre-se</span>
              </S.SigninMessage>
            </>
          )}

          {isSigninForm && (
            <>
              <S.FormTitle>Signin</S.FormTitle>

              <ChevronLeftCircleIcon onClick={() => setFormType('login')} />

              <SigninForm />
            </>
          )}
        </S.FormContainer>
      </S.Container>
    );

  return <></>;
};
