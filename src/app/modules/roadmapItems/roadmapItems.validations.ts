import { z } from 'zod';

const roadmapItemValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required!',
    })
    .trim()
    .min(1, 'Title cannot be empty.'),

  description: z
    .string({
      required_error: 'Description is required!',
    })
    .trim()
    .min(1, 'Description cannot be empty.'),

  status: z.enum(['Planned', 'In-progress', 'Completed'], {
    required_error: 'Status is required!',
    invalid_type_error: 'Status must be Planned, In-progress, or Completed.',
  }),

  category: z
    .string({
      required_error: 'Category is required!',
    })
    .trim()
    .min(1, 'Category cannot be empty.'),

  upvotes: z.number().int().nonnegative().default(0),

  items: z.array(z.string().trim().min(1, 'Item cannot be empty')).default([]),
  // comments: z.array(commentsZodSchema).optional(),
});

export default roadmapItemValidationSchema;
