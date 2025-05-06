import React from 'react';

type PostCardProps = {
    content: string;
    authorName: string;
    createdAt: string;
};

const PostCard: React.FC<PostCardProps> = ({ content, authorName, createdAt }) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 space-y-2">
            <div className="text-sm text-gray-600">
                <span className="font-medium">{authorName}</span>・{new Date(createdAt).toLocaleDateString()}
            </div>
            <p className="text-gray-800 whitespace-pre-line">{content}</p>
        </div>
    );
};

export default PostCard;
