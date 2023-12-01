import { z } from 'zod';

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(4, 'O nome deve ter pelo menos 4 caracteres'),
    email: z
      .string({ required_error: 'Campo obrigatório' })
      .min(1, 'Campo obrigatório')
      .email('Insira um email válido'),
    password: z
      .string()
      .min(1, 'Campo obrigatório')
      .min(6, 'A senha deve ter no mínimo 6 caracteres')
  })
  .strict();
