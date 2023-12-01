import { z } from 'zod';

export const loginFormSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(4, 'O nome deve ter pelo menos 4 caracteres')
      .email('Insira um email válido'),
    password: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
  })
  .strict()
  .required();
