import { z } from 'zod';
import { messages } from "../lib/messages";
import { LoginFormTypes } from '../components/forms/LoginForm.types';

export const loginSchema = z.object({
    email: z.string()
        .nonempty(messages.error.required('Email'))
        .email('Invalid email address')
        .min(4, messages.error.min('Email', 4))
        .max(255, messages.error.max('Email', 255)),

    password: z.string()
        .nonempty(messages.error.required('Password'))
        .min(8, messages.error.min('Password', 8))
        .max(255, messages.error.max('Password', 255))
});

export type LoginFormValues = LoginFormTypes & z.infer<typeof loginSchema>;