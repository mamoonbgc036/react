import Navbar from './Navbar.tsx'
import { AuthContext } from './context/AuthContext.tsx'
import { useContext } from 'react'

export default function Layout() {
    const auth = useContext(AuthContext)
    if (!auth) return null;
    const { user, login, logout } = auth
    return (
        <>
            <h2>My App</h2>
            {user}
            {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
            <Navbar />
        </>
    )
}