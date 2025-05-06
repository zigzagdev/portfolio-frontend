export type Post = {
    id: string;
    content: string;
    authorName: string;
    createdAt: string;
    likesCount: number | null;
    isLiked: boolean | null;
};