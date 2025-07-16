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
import { User, fetchUserProfile } from '../lib/user';

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
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            if (!token || !userId) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const userProfile = await fetchUserProfile(userId, token);
                setUser(userProfile);
            } catch (error) {
                console.error('Failed to fetch user profile:', error);
                setUser(null);
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const logout = async () => {
        try {
            await logoutUser(); // 通常のAPI logout
        } catch (err) {
            console.warn('Logout failed (ignored):', err);
        } finally {
            setUser(null);
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
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
