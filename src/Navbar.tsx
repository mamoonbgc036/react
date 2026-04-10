interface Props {
    user: string | null;
    login: () => void;
    logout: () => void
}
export default function Navbar({ user, login, logout }: Props) {
    return (
        <>
            <p>Welcome {user}</p>
            {user ? <button onClick={logout}>Logout</button> : <button onClick={login}>Login</button>}
        </>
    )
}