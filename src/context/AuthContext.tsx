import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react';
import { logoutUser } from '../lib/logout';
import { User } from '../lib/user';

type AuthContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    logout: () => Promise<void>;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {

                const isMock = 'true';

                if (isMock) {
                    const mockUser = {
                        id: 1,
                        firstName: 'Mock',
                        lastName: 'User',
                        email: 'mock@example.com',
                        bio: 'This is a mock bio.',
                        location: 'Tokyo, Japan',
                        skills: ['React', 'TypeScript', 'Tailwind'],
                        profileImage: 'https://i.pravatar.cc/150?u=mock',
                    };
                    setUser(mockUser);
                } else {
                    const res = await fetch('/api/me');
                    if (res.ok) {
                        const data = await res.json();
                        setUser(data);
                    } else {
                        setUser(null);
                    }
                }
            } catch (err) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const logout = async () => {
        try {
            await logoutUser();
            setUser(null);
            localStorage.removeItem('token');
        } catch (err) {
            alert(err);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
