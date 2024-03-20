'use client'
import { TodoObject } from "@/store/todoStore";
// import { useTodos } from "@/store/todoStore";
import { useState } from "react"

export const TodoForm = () => {
    const [inputText, setInputText] = useState<string>('');
    const [todoItems, setTodoItems] = useState<TodoObject[]>([]);
    const [checked] = useState(false)
    // const [handleAddTodo] = useTodos();
    // console.log(inputText)


    const handleFormTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodoItems([{
            id: Math.random().toString(),
            value: inputText,
            checked: false
        }, ...todoItems])
        setInputText('')
        // window.localStorage.setItem('todos', JSON.stringify(inputText))
    }

    return (
        <>
            <form onSubmit={handleFormTodo}>
                <div className="mt-6">
                    <input type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        autoFocus
                        maxLength={30}
                        checked
                        className="border-2 p-1 text-xl m-2"
                    />
                    <button type="submit" className="bg-blue-700 px-4 p-1 rounded-md text-white text-2xl">Add</button>
                </div>
            </form>

            <div>
                <ul>
                    {todoItems.map((todo) => (
                        <li key={todo.id} className="capitalize">{todo.value}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
