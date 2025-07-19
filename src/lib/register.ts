export type RegisterFormInput = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export async function registerUser(data: RegisterFormInput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('📦 Mock register user:', data);
            resolve({ message: 'Mock registration success' });
        }, 1000);
    });
}
