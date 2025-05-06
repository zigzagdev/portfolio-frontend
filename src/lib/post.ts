export type CreatePostInput = {
    title: string;
    content: string;
};

export async function createPost(data: CreatePostInput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Mock post created:", data);
            resolve({ message: "Post created successfully" });
        }, 1000);
    });
}
