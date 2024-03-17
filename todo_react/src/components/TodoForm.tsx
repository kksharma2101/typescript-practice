import { useState } from "react"

export const TodoForm = () => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(todo)
        setTodo('')
    }
    const handleAddTodo = (todo: string) => {
        localStorage.setItem("todo", todo)
    }

    return (
        <form onSubmit={(handleSubmit)}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}
