import { Post } from '../features/post/types/post.types';
import { mockPosts } from '../mock/posts';

export const fetchFeed = async (): Promise<Post[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockPosts), 300);
    });
};
