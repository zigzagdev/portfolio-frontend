import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PostSubmissionForm from '../../../components/post/PostSubmissionForm';
import { postSubmissionSchema, PostSubmissionValues } from '../../../hooks/validation/post-submission';
import { createPost } from '../../../lib/post';
import {messages} from "../../../lib/messages";

const PostSubmissionFormContainer: React.FC = () => {
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const {
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<PostSubmissionValues>({
        resolver: zodResolver(postSubmissionSchema),
    });

    const title = watch('title');
    const content = watch('content');


    const onSubmit = async (data: PostSubmissionValues) => {
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            await createPost(data);
            setSuccessMsg(messages.success.submit.post.success);
        } catch {
            setErrorMsg(messages.error.submit.post.default);
        } finally {
            setLoading(false);
        }
    };

    return (
        <PostSubmissionForm
            title={title}
            content={content}
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
