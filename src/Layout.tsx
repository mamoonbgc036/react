import Navbar from "./Navbar.tsx";

interface Props {
    user: string | null;
    login: () => void;
    logout: () => void;
}

const Layout = ({ user, login, logout }: Props) => {
    return (
        <div>
            <h1>My App</h1>

            {/* Passing again ↓ */}
            <Navbar user={user} login={login} logout={logout} />
        </div>
    );
};

export default Layout;