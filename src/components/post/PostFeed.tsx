import React from 'react';
import PostCard from './PostCard';

export type Post = {
    id: string;
    content: string;
    authorName: string;
    createdAt: string;
    likesCount?: number;
    isLiked?: boolean;
};

type PostFeedProps = {
    posts: Post[];
};

const PostFeed: React.FC<PostFeedProps> = ({ posts }) => {
    if (posts.length === 0) {
        return (
            <p className="text-center text-gray-500 py-8">
                No posts to display.
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    content={post.content}
                    authorName={post.authorName}
                    createdAt={post.createdAt}
                    likesCount={post.likesCount ?? 0}
                    isLiked={post.isLiked ?? false}
                />
            ))}
        </div>
    );
};

export default PostFeed;
