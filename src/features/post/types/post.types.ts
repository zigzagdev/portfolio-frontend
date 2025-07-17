export type Post = {
    id: string;
    content: string;
    firstName: string;
    createdAt: string;
    likesCount: number | null;
    isLiked: boolean | null;
};