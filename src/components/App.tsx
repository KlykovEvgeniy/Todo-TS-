import { TodoForm } from "./TodoForm"
import Container from "./Container"
import { Todo } from "../types/TodosTypes"
import { useState } from "react"
import TodoList from "./TodoList"
import shortid from "shortid"

export const App = function () {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [value, setValue] = useState('')

    const onClick = () => {
        const newTodo: Todo = {
            id: shortid.generate(),
            title: value,
            completed: false,
        }

        setTodos(prev => [...prev, newTodo])
        setValue('')
    }

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }
    
    return (
        <>
            <Container>
                <TodoForm onClick={onClick} onChange={onChange} />
                <TodoList list={todos} />
            </Container>
        </>
    )
}
