import React from 'react';
import Button from '../ui/Button';
import PostFeed from '../post/PostFeed';
import { mockPosts } from "../../mock/posts";
import { Post } from "../../features/post/types/post.types";

type Props = {
    onLogout: () => void;
    isLoggingOut: boolean;
    errorMsg: string;
    posts: Post[];
};

const Dashboard: React.FC<Props> = ({ onLogout, isLoggingOut, errorMsg }) => {
    return (
        <main className="bg-gray-700">
            <section className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-2xl text-center">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
                    Welcome to your Dashboard
                </h1>
                <p className="text-gray-600 mb-10">
                    You are successfully logged in. You can log out using the button below.
                </p>
                <Button onClick={onLogout} disabled={isLoggingOut} className="w-full max-w-sm mx-auto">
                    {isLoggingOut ? 'Logging out...' : 'Logout'}
                </Button>
                {errorMsg && (
                    <p className="text-red-500 mt-4">{errorMsg}</p>
                )}
            </section>
            <section className="mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Posts</h2>
                <PostFeed
                    posts={mockPosts}
                />
            </section>
        </main>
    );
};

export default Dashboard;
