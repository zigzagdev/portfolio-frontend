import React, { useState } from 'react';
import TextInput from '../ui/TextInput';
import EmailInput from '../ui/EmailInput';
import PasswordInput from '../ui/PasswordInput';
import Button from '../ui/Button';
import { RegistrationFormValues } from './RegistrationForm.types';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<RegistrationFormValues>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<Partial<RegistrationFormValues>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        const newErrors: Partial<RegistrationFormValues> = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.password.trim()) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log('✅ Submit:', formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg w-full"
        >
            <TextInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g. Taro"
                required
                error={errors.firstName}
                className="w-full"
            />

            <TextInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g. Yamada"
                required
                error={errors.lastName}
                className="w-full"
            />

            <EmailInput
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. taro@example.com"
                required
                error={errors.email}
                className="w-full"
            />

            <PasswordInput
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimum 6 characters"
                required
                error={errors.password}
                className="w-full"
            />

            <Button type="submit" className="w-full mt-4">
                Register
            </Button>
        </form>
    );
};

export default RegistrationForm;
