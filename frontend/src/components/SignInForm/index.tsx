import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { signin } from '../../libs/axios';
import { useAuth } from '../../hooks/useAuth';
import { registerFormSchema } from './schema';

import * as S from './styles';

type RegisterData = z.infer<typeof registerFormSchema>;

export const SigninForm = () => {
  const { handleSignin } = useAuth();

  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterData>({
    resolver: zodResolver(registerFormSchema)
  });

  const { isPending, mutateAsync: signinMutation } = useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      const token = data;

      handleSignin(token);

      toast.success('Cadastro realizado com sucesso');

      navigate('/');
    },
    onError: (error) => {
      let errorMessage = 'Erro ao se cadastrar';

      if (
        error instanceof AxiosError &&
        error.response?.data.message === 'Email already in use'
      ) {
        errorMessage = 'Este e-mail já está em uso';
      }

      toast.error(errorMessage);
      reset();
    }
  });

  const onFormSubmit = async (registerData: RegisterData) => {
    await signinMutation(registerData);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onFormSubmit)}>
        <S.InputContainer>
          <S.Label>Nome</S.Label>
          <S.Input
            type="text"
            {...register('name')}
            placeholder="Insira o seu nome completo"
          />

          <S.FieldError>
            {errors.name && <p>{errors.name.message}</p>}
          </S.FieldError>
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>Email</S.Label>
          <S.Input
            type="text"
            {...register('email')}
            placeholder="Insira um e-mail válido"
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
            placeholder="Insira uma senha"
          />

          <S.FieldError>
            {errors.password && <p>{errors.password.message}</p>}
          </S.FieldError>
        </S.InputContainer>

        <S.SubmitButton type="submit" disabled={isPending}>
          Registrar-se
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};
