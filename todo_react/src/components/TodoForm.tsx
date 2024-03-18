import { useState } from "react"
import { useTodos } from "../store/todoStore.tsx";

export const TodoForm = () => {
    const [todo, setTodo] = useState("");
    const { handleAddTodo } = useTodos();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleAddTodo(todo)
        setTodo('')
    }
    // const handleAddTodo = (todo: string) => {
    //     localStorage.setItem("todo", todo)
    // }

    return (
        <form onSubmit={(handleSubmit)}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} autoFocus />
            <button type="submit">Add</button>
        </form>
    )
}
