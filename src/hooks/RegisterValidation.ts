import { z } from 'zod';

export const registrationSchema = z.object({
    firstName: z.string()
        .nonempty('First Name is required')
        .min(3, 'First Name must be at least 3 characters'),
    lastName: z.string()
        .nonempty('Last Name is required')
        .min(3, 'Last Name must be at least 3 characters'),
    email: z.string()
        .nonempty('Email is required')
        .email('Invalid email address'),
    password: z.string()
        .nonempty('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
