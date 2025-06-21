import { z } from 'zod';

const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required to create a user.',
    })
    .max(30, "Name can't be more than 30 characters long.")
    .trim()
    .refine(val => val.charAt(0) === val.charAt(0).toUpperCase(), {
      message: 'Name must start with a capital letter.',
    }),

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

  image: z.string().optional(),

  gender: z.enum(['male', 'female', 'others'], {
    required_error: 'Gender is required to create a user.',
    invalid_type_error: 'Invalid gender value',
  }),

  role: z.enum(['user', 'admin']).default('user'),

  isActive: z.boolean().default(true),
});
export default userValidationSchema;
