import { useAuth } from "../hooks/useAuth";

function Navbar() {
    const { user, logout } = useAuth();

    return (
        <div>
            {user ? (
                <>
                    <span>{user.name}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <span>Guest</span>
            )}
        </div>
    );
}

export default Navbar;
