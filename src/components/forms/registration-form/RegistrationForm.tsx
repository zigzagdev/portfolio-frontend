import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from '../../../hooks/validation/register';
import TextInput from '../../ui/TextInput';
import EmailInput from '../../ui/EmailInput';
import PasswordInput from '../../ui/PasswordInput';
import Button from '../../ui/Button';
import { registerUser } from '../../../lib/register';
import { messages } from '../../../lib/messages';
import Spinner from '../../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { RegistrationFormValues } from '../../../hooks/validation/register';

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        control,
    } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            bio: null,
            location: null,
            skills: [],
            profile_image: null,
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'skills',
    });

    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (data: RegistrationFormValues) => {
        setLoading(true);
        setSuccessMsg('');
        setErrorMsg('');

        try {
            const formData = new FormData();

            const fileInput = watch('profile_image');
            const fileList = fileInput instanceof FileList ? fileInput : null;

            const profileImageFile = fileList?.[0];
            const parsedSkills = Array.isArray(data.skills) ? data.skills : [];

            formData.append('first_name', data.first_name || '');
            formData.append('last_name', data.last_name || '');
            formData.append('email', data.email || '');
            formData.append('password', data.password || '');
            formData.append('bio', data.bio ?? '');
            formData.append('location', data.location ?? '');
            formData.append('skills', JSON.stringify(parsedSkills));

            if (profileImageFile) {
                formData.append('profile_image', profileImageFile);
            }


            await registerUser(formData);

            setSuccessMsg(messages.success.register.user.success);
            navigate('/dashboard');
        } catch {
            setErrorMsg(messages.error.register.user.default);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 bg-white p-8 rounded-xl shadow-lg"
        >
            <TextInput
                label="First Name"
                {...register('first_name')}
                placeholder="e.g. Taro"
                error={errors.first_name?.message}
                className="w-full"
            />

            <TextInput
                label="Last Name"
                {...register('last_name')}
                placeholder="e.g. Yamada"
                error={errors.last_name?.message}
                className="w-full"
            />

            <EmailInput
                label="Email Address"
                {...register('email')}
                placeholder="e.g. taro@example.com"
                error={errors.email?.message}
                className="w-full"
            />

            <PasswordInput
                label="Password"
                {...register('password')}
                placeholder="Minimum 8 characters"
                error={errors.password?.message}
                className="w-full mb-5 mt-10"
            />

            <label className="font-medium text-sm text-gray-700">Gender (optional)</label>
            <select {...register('bio')} className="w-full border rounded p-2">
                <option value="">Prefer not to say</option>
                <option value="man">Man</option>
                <option value="woman">Woman</option>
                <option value="nonbinary">Non-binary</option>
                <option value="other">Other</option>
            </select>

            <TextInput
                label="Location"
                {...register('location')}
                placeholder="Where are you based?"
                error={errors.location?.message}
                className="w-full"
            />

            <label className="text-sm font-medium text-gray-700">Skills</label>
            {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                    <TextInput
                        {...register(`skills.${index}`)}
                        placeholder={`Skill ${index + 1}`}
                        error={errors.skills?.[index]?.message}
                        className="w-full"
                    />
                    {fields.length > 1 && (
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-500 text-sm hover:underline"
                        >
                            delete
                        </button>
                    )}
                </div>
            ))}

            <button
                type="button"
                onClick={() => append('')}
                className="text-indigo-600 text-sm hover:underline mt-1 self-start"
            >
                + add your skill
            </button>

            <input
                type="file"
                accept="image/*"
                {...register('profile_image')}
                className="w-full border rounded p-2"
            />

            <div className="mt-10">
                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <Spinner size="sm"/> Submitting...
                        </div>
                    ) : (
                        'Register'
                    )}
                </Button>
            </div>

            {successMsg && (
                <p className="text-sm text-green-600 font-medium bg-green-100 p-2 rounded">
                    {successMsg}
                </p>
            )}
            {errorMsg && (
                <p className="text-sm text-red-600 font-medium bg-red-100 p-2 rounded">
                    {errorMsg}
                </p>
            )}
        </form>
    );
};

export default RegistrationForm;
