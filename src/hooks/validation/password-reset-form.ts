import { z } from 'zod';
import { messages } from "../../lib/messages";
import { PasswordResetRequestFormProps } from '../../features/auth/password-reset/type';

export const passwordResetRequestSchema = z.object({
    email: z.string()
        .nonempty(messages.error.email.null)
        .email(messages.error.email.default)
        .min(4, messages.error.min('Email', 4))
        .max(255, messages.error.max('Email', 255)),
});

export type PasswordResetRequestFormValues = PasswordResetRequestFormProps & z.infer<typeof passwordResetRequestSchema>;