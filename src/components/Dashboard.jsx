import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
    const { user } = useAuth();

    return <h1>Welcome {user?.name}</h1>;
}