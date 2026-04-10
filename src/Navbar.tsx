interface Props {
    user: string | null;
    login: () => void;
    logout: () => void;
}

const Navbar = ({ user, login, logout }: Props) => {
    return (
        <div>
            {user ? (
                <>
                    <p>Welcome {user}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    );
};

export default Navbar;