import { useTodos } from "../store/todoStore"

export const TodosList = () => {
    const [todos] = useTodos();

    const filterData = todos;
    return (
        <ul>{
            filterData?.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} />
                    <span>{todo}</span>
                    {todo.checked ? (<button>Delete</button>) : ""}
                </li>
            ))
        }
        </ul>
    )
}
