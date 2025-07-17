import React from 'react';
import LikeButton from '../ui/LikeButton';

type PostCardProps = {
    content: string;
    firstName: string;
    createdAt: string;
};

const PostCard: React.FC<PostCardProps> = ({ content, createdAt, firstName}) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 space-y-2">
            <div className="text-sm text-gray-600">
                <span className="font-medium">{firstName}</span>・{new Date(createdAt).toLocaleDateString()}
            </div>
            <p className="text-gray-800 whitespace-pre-line">{content}</p>
            <div className="flex items-center justify-between mt-2">
            </div>
        </div>
    );
};

export default PostCard;
