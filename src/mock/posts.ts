import { Post } from '../features/post/types/post.types';

export const mockPosts: Post[] = [
    {
        id: '1',
        content: 'This is my first post!',
        authorName: 'Alice',
        createdAt: '2025-05-06T08:30:00Z',
        likesCount: 3,
        isLiked: false,
    },
    {
        id: '2',
        content: 'Enjoying the sunshine ☀️',
        authorName: 'Bob',
        createdAt: '2025-05-05T15:45:00Z',
        likesCount: 10,
        isLiked: true,
    },
];