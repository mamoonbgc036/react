import Navbar from './Navbar.tsx'
interface Props {
    user: string | null;
    login: () => void;
    logout: () => void
}

export default function Layout({ user, login, logout }: Props) {
    return (
        <>
            <h2>My App</h2>
            <Navbar user={user} login={login} logout={logout} />
        </>
    )
}