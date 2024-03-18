import { TodoForm } from "./components/TodoForm"
import "./App.css"
import { TodosList } from "./components/TodosList"

function App() {


  return (
    <main className="main-container">
      <h2>Todo With React and Typescript</h2>
      <TodoForm />
      <TodosList />
    </main>
  )
}

export default App
