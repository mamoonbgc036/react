import { createContext } from 'react'
interface AuthContextType {
    user: string | null;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null)