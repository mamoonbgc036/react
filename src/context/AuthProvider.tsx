import { AuthContext } from './AuthContext.tsx'
import { useState, type ReactNode } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<string | null>(null)
    const login = () => setUser("abdullah")
    const logout = () => setUser(null)
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}