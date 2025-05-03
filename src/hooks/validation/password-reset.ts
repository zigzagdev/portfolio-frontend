import { z } from 'zod';
import { messages } from '../../lib/messages';

export const passwordResetSchema = z.object({
    password: z.string()
        .nonempty(messages.error.password.null)
        .min(8, messages.error.password.minLength(8))
        .max(255, messages.error.password.maxLength(255))
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            messages.error.reset.password.invalidFormat,
        ),

    confirmPassword: z.string().nonempty(messages.error.password.null),
}).refine((data) => data.password === data.confirmPassword, {
    message: messages.error.reset.password.notMatch,
    path: ['confirmPassword'],
});
