export const messages = {
    success: {
        registration: 'Registration successful!',
        login: 'Logged in successfully!',
        upload: {
            success: 'Upload successful!',
            progress: 'Upload in progress...',
        },
        reset: {
            password:{
                success: 'Password reset link sent successfully!',
                progress: 'Sending password reset link...',
            },
            email: {
                success: 'Email sent successfully!',
                progress: 'Sending email...',
            }
        },
        update: {
            profile: {
                success: 'Profile updated successfully!',
                progress: 'Updating profile...',
            }
        }
    },
    error: {
        required: (field: string) =>  `${ field } is required.`,
        min: (field: string, min: number) => `${ field } must be at least ${ min } characters.`,
        max: (field: string, max: number) => `${ field } must be at most ${ max } characters.`,
        registration: 'Registration failed. Please try again.',
        unexpected: 'Unexpected error occurred. Please try again later.',
        login: {
            default: 'Login failed. Please check your email or password.',
            accountLocked: 'Your account has been locked. Please contact support.',
        },
        upload: {
            default: 'Upload failed. Please try again.',
            fileSize: (maxSize: number) => `File size exceeds the limit of ${ maxSize } MB.`,
            invalidType: 'Invalid file type. Please upload a valid image.',
        },
        password: {
            default: 'Password is invalid.',
            null: 'Password is required.',
            minLength: (min: number) => `Password must be at least ${ min } characters long.`,
            maxLength: (max: number) => `Password must be at most ${ max } characters long.`,
        },
        token: {
            default: 'Token is invalid or expired.',
            null: 'Token is required.',
        },
        email: {
            default: 'Email is invalid.',
            null: 'Email is required.',
            invalid: 'Invalid email address.',
        },
        reset: {
            password: {
                default: 'Password reset failed. Please try again.',
                null: 'Password is required.',
                minLength: (min: number) => `Password must be at least ${min} characters long.`,
                maxLength: (max: number) => `Password must be at most ${max} characters long.`,
                notMatch: 'Passwords do not match.',
                weak: 'Password is too weak. Include a mix of letters, numbers, and symbols.',
                invalidFormat: 'Password must include at least one uppercase letter, one lowercase letter, and one number.',
            },
            email: {
                default: 'Failed to send email. Please try again.',
                null: 'Email is required.',
                invalid: 'Invalid email address.',
            }
        },
        update: {
            profile: {
                default: 'Profile update failed. Please try again.',
                null: 'Profile data is required.',
                invalid: 'Invalid profile data.'
            }
        }
    },
};
