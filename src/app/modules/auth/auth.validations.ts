import { z } from 'zod';

const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required to create a user.',
    })
    .email('Invalid email format')
    .trim(),
  password: z
    .string({
      required_error: 'Password is required to create a user.',
    })
    .min(1, 'Password is required.')
    .max(30, "Password can't be more than 30 characters long.")
    .trim(),
});

export const AuthValidation = {
  loginValidationSchema,
};
