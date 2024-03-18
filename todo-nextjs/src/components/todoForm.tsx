'use client'
import { useState } from "react"

export const TodoForm = () => {
    const [todo, setTodo] = useState('');

    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setTodo((prev) => {

        //     return [...prev, todo]
        // })
    }

    return (
        <form onSubmit={handleAddTodo}>
            <div className="mt-6">
                <input type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    autoFocus
                    className="border-2 p-1 text-xl m-2"
                />
                <button type="submit" className="bg-blue-700 px-4 p-1 rounded-md text-white text-2xl">Add</button>
            </div>
        </form>
    )
}
