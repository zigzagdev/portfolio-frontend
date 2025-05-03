import { z } from 'zod';
import { messages } from "../../lib/messages";

export const registrationSchema = z.object({
    firstName: z.string()
        .nonempty(messages.error.required('First Name'))
        .min(3, messages.error.min('First Name', 3)),
    lastName: z.string()
        .nonempty(messages.error.required('Last Name'))
        .min(3, messages.error.min('Last Name', 3)),
    email: z.string()
        .nonempty(messages.error.required('Email'))
        .email('Invalid email address')
        .min(4, messages.error.min('Email', 4))
        .max(255, messages.error.max('Email', 255)),
    password: z.string()
        .nonempty(messages.error.required('Password'))
        .min(8, messages.error.min('Password', 8))
        .max(255, messages.error.max('Password', 255)),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
