import React from 'react';
import PostCard from './PostCard';
import { Post } from '../../features/post/types/post.types';

type PostFeedProps = {
    posts: Post[];
};

const PostFeed: React.FC<PostFeedProps> = ({ posts = [] }) => {
    if (posts.length === 0) {
        return (
            <p className="text-center text-gray-500 py-8">
                No posts to display.
            </p>
        );
    }

    return (
        <div className="space-y-4">
            {posts?.map((post) => (
                <PostCard
                    key={post.id}
                    content={post.content}
                    firstName={post.firstName}
                    createdAt={post.createdAt}
                />
            ))}
        </div>
    );
};

export default PostFeed;
