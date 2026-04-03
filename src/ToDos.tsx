import { useState, useEffect } from 'react'

type ToDos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export default function ToDos() {
    const [loading, setLoading] = useState<boolean>(true)
    const [todos, setTodos] = useState<ToDos[]>([])

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data: ToDos[] = await response.json();
                setTodos(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchTodos();
    }, [])

    if (loading) return <p>Loading</p>

    return (
        <>
            {todos.map(todo => (
                <>
                    <li>{todo.title}</li>
                    <li>{todo.completed ? 'completed' : 'not completed'}</li>
                </>
            ))}
        </>
    )
}