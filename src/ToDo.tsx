import { useEffect, useState } from "react";

// 🔹 Define Type (VERY IMPORTANT in TypeScript)
type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // 🔹 useEffect → Fetch data
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data: Todo[] = await res.json();
                setTodos(data);
            } catch (error) {
                console.error("Error fetching todos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    // 🔹 Loading state
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h2>Todo List</h2>

            {todos.slice(0, 20).map((todo) => (
                <div key={todo.id} style={{ marginBottom: "10px" }}>
                    <p>
                        <strong>{todo.title}</strong>
                    </p>
                    <p>Status: {todo.completed ? "✅ Completed" : "❌ Not Completed"}</p>
                </div>
            ))}
        </div>
    );
};

export default Todos;