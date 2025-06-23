import { z } from 'zod';

export const commentsValidationSchema = z.object({
  userId: z.string({ required_error: 'User ID is required.' }),
  itemId: z.string({ required_error: 'Item ID is required.' }),
  text: z
    .string({ required_error: 'Comment text is required.' })
    .min(1, 'Comment text cannot be empty.')
    .max(300, 'Comment must be under 300 characters.'),
  //   replies: z.array(replyZodSchema).optional(),
});
