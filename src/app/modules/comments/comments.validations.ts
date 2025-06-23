import { z } from 'zod';

export const replyValidationSchema = z.object({
  commentId: z
    .string({
      required_error: 'Comment ID is required.',
    })
    .min(1, 'Comment ID cannot be empty.'),

  userId: z
    .string({
      required_error: 'User ID is required.',
    })
    .min(1, 'User ID cannot be empty.'),

  text: z
    .string({
      required_error: 'Reply text is required.',
    })
    .min(1, 'Reply text cannot be empty.'),
});

export const commentsValidationSchema = z.object({
  userId: z.string({ required_error: 'User ID is required.' }),
  itemId: z.string({ required_error: 'Item ID is required.' }),
  text: z
    .string({ required_error: 'Comment text is required.' })
    .min(1, 'Comment text cannot be empty.')
    .max(300, 'Comment must be under 300 characters.'),
  replies: z.array(replyValidationSchema).optional(),
});
