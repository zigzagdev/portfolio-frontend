export type LoginFormInput = {
    email: string;
    password: string;
};

export async function loginUser(data: LoginFormInput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('📦 Mock logined user:', data);
            resolve({ message: 'Mock login success' });
        }, 1000);
    });
}
