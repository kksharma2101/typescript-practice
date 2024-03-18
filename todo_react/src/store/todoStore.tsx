import { ReactNode, createContext, useContext, useState } from "react";

export type TodoProvidersProps = {
    children: ReactNode
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date
}

export type TodoContext = {
    todos: Todo[];
    handleAddTodo: (task: string) => void;
}

export const TodosContext = createContext<TodoContext | null>(null);

export const TodosProviders = ({ children }: TodoProvidersProps) => {

    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[]
        } catch (error) {
            return []
        }
    })

    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodos: Todo[] = [{
                id: Math.random().toString(),
                task: task,
                completed: false,
                createdAt: new Date(),
            },
            ...prev
            ]
            // console.log(newTodos)
            // console.log("my prev data is", prev)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos
        }
        )
    }

    return (
        <TodosContext.Provider value={{ todos, handleAddTodo }}>
            {children}
        </TodosContext.Provider>
    )
}

// comsumer

export const useTodos = () => useContext(TodosContext)