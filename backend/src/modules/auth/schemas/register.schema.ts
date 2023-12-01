import z from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(4, 'Name must to be at least 4 characters'),
    email: z.string().email(),
    password: z.string().min(6, 'Passoword must to be at least 6 characters')
  })
  .required();

export type RegisterSchema = z.infer<typeof registerSchema>;
