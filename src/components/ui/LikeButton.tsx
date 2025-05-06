import React, { useState } from 'react';

type LikeButtonProps = {
    initialIsLiked: boolean;
    initialLikesCount: number;
    onToggle?: (liked: boolean) => void;
};

const LikeButton: React.FC<LikeButtonProps> = (
    {
       initialIsLiked,
       initialLikesCount,
       onToggle,
    }) => {
    const [isLiked, setIsLiked] = useState(initialIsLiked);
    const [likesCount, setLikesCount] = useState(initialLikesCount);

    const handleClick = () => {
        const newLikedState = !isLiked;
        setIsLiked(newLikedState);
        setLikesCount((prev) => prev + (newLikedState ? 1 : -1));
        onToggle?.(newLikedState);
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-red-600"
        >
            <span>{isLiked ? '❤️' : '🤍'}</span>
            <span>{likesCount}</span>
        </button>
    );
};

export default LikeButton;
