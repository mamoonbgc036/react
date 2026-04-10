import { AuthContext } from './context/AuthContext.tsx'
import { useContext } from 'react'

export default function Navbar() {
    const auth = useContext(AuthContext)
    if (!auth) return null;
    const { user, login, logout } = auth
    return (
        <>
            <h1>Welcome {user}</h1>
            {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
        </>
    )
}