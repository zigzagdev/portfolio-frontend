import { UseFormRegister } from 'react-hook-form';
import { LoginFormValues } from '../../../hooks/validation/login';

export type Type = {
    register: UseFormRegister<LoginFormValues>;
    errors: Partial<Record<keyof LoginFormValues, { message?: string }>>;
    loading: boolean;
    errorMsg: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
