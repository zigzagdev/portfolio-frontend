import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PostSubmissionForm from '../../../components/post/PostSubmissionForm';
import { postSubmissionSchema, PostSubmissionValues } from '../../../hooks/validation/post-submission';
import { createPost } from '../../../lib/post';

const PostSubmissionFormContainer: React.FC = () => {
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const {
        handleSubmit,
        formState: { errors },
    } = useForm<PostSubmissionValues>({
        resolver: zodResolver(postSubmissionSchema),
    });

    const onSubmit = async (data: PostSubmissionValues) => {
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            await createPost(data);
            setSuccessMsg('Your post has been successfully submitted.');
        } catch {
            setErrorMsg('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PostSubmissionForm
            title={''}
            body={''}
            onTitleChange={() => {}}
            onBodyChange={() => {}}
            onSubmit={handleSubmit(onSubmit)}
            loading={loading}
            successMsg={successMsg}
            errorMsg={Object.values(errors)[0]?.message || errorMsg}
        />
    );
};

export default PostSubmissionFormContainer;
