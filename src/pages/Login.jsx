import { useAuth } from "../hooks/useAuth";

function Login() {
    const { login } = useAuth();

    const handleLogin = () => {
        // Normally from API (Laravel)
        const userData = {
            name: "Mamoon",
            email: "mamoon@mail.com"
        };

        login(userData);
    };

    return <button onClick={handleLogin}>Login</button>;
}