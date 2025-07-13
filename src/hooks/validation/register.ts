import { z } from 'zod';
import { messages } from "../../lib/messages";

export const registrationSchema = z.object({
    first_name: z.string()
        .nonempty(messages.error.required('First Name'))
        .min(3, messages.error.min('First Name', 3)),
    last_name: z.string()
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

    bio: z.enum(['man', 'woman', 'nonbinary', 'other'])
        .optional()
        .nullable(),

    location: z.string()
        .max(255, messages.error.max('Location', 255))
        .optional()
        .nullable(),

    skills: z.array(z.string())
        .max(10, messages.error.max('Skills', 10)),

    profile_image: z.any()
        .optional()
        .nullable()
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
