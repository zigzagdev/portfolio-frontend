import { z } from 'zod';
import { messages } from "../../lib/messages";

export const postSubmissionSchema = z.object({
    title: z.string()
        .nonempty(messages.error.required('Title'))
        .min(4, messages.error.min('Title', 4))
        .max(255, messages.error.max('Title', 255)),

    content: z.string()
        .nonempty(messages.error.required('Content'))
        .min(8, messages.error.min('Content', 8))
        .max(255, messages.error.max('Content', 255))
});

export type PostSubmissionValues = z.infer<typeof postSubmissionSchema>;