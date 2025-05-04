import { z } from 'zod';
import { messages } from '../../lib/messages';

export const userProfileEditSchema = z.object({
    firstName: z.string()
        .nonempty(messages.error.required('First Name'))
        .min(2, messages.error.min('First Name', 2)),

    lastName: z.string()
        .nonempty(messages.error.required('Last Name'))
        .min(2, messages.error.min('Last Name', 2)),

    bio: z.string()
        .max(500, messages.error.max('Bio', 500))
        .optional(),

    location: z.string()
        .max(255, messages.error.max('Location', 255))
        .optional(),
});

export type UserProfileEditFormValues = z.infer<typeof userProfileEditSchema>;
