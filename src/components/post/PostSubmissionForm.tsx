import React from 'react';
import TextInput from '../ui/TextInput';
import Textarea from '../ui/TextareaInput';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';

type Props = {
    title: string;
    content: string;
    onTitleChange: (value: string) => void;
    onBodyChange: (value: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    loading?: boolean;
    errorMsg?: string;
    successMsg?: string;
};

const PostSubmissionForm: React.FC<Props> = (
    {
        title,
        content,
        onTitleChange,
        onBodyChange,
        onSubmit,
        loading = false,
        errorMsg,
        successMsg
    }) => {
    return (
        <form
            onSubmit={onSubmit}
            className="bg-white p-6 shadow rounded max-w-xl mx-auto space-y-4"
        >
            <h2 className="text-xl font-semibold text-center">Create a Post</h2>

            <TextInput
                label="Title"
                value={title}
                onChange={(e) => onTitleChange(e.target.value)}
                placeholder="Enter post title"
                className="w-full"
            />

            <Textarea
                label="Body"
                value={content}
                onChange={(e) => onBodyChange(e.target.value)}
                placeholder="Write your post here..."
                rows={6}
                className="w-full"
            />

            {errorMsg && (
                <p className="text-sm text-red-600 bg-red-100 p-2 rounded">{errorMsg}</p>
            )}
            {successMsg && (
                <p className="text-sm text-green-600 bg-green-100 p-2 rounded">
                    {successMsg}
                </p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                    <div className="flex items-center justify-center gap-2">
                        <Spinner size="sm" />
                        Posting...
                    </div>
                ) : (
                    'Post'
                )}
            </Button>
        </form>
    );
};

export default PostSubmissionForm;