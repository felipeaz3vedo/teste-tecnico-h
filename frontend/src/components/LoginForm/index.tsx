import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { login } from '../../libs/axios';
import { useAuth } from '../../hooks/useAuth';
import { loginFormSchema } from './schema';

import * as S from './styles';

type LoginFormData = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema)
  });

  const { isPending, mutateAsync: loginMutation } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = data;

      handleLogin(token);

      toast.success('Login realizado com sucesso');

      navigate('/');
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error('Email e/ou senha inválidos');

        reset();
      }
    }
  });

  const onFormSubmit = async (loginFormData: LoginFormData) => {
    await loginMutation(loginFormData);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onFormSubmit)}>
        <S.InputContainer>
          <S.Label>Email</S.Label>
          <S.Input
            type="text"
            {...register('email')}
            placeholder="Insira o seu e-mail"
          />

          <S.FieldError>
            {errors.email && <p>{errors.email.message}</p>}
          </S.FieldError>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>Senha</S.Label>
          <S.Input
            type="password"
            {...register('password')}
            placeholder="Insira sua senha"
          />

          <S.FieldError>
            {errors.password && <p>{errors.password.message}</p>}
          </S.FieldError>
        </S.InputContainer>

        <S.SubmitButton type="submit" disabled={isPending}>
          Login
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};
