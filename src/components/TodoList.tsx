import { Todo } from "../types/TodosTypes"
import TodoItem from "./TodoItem"

interface TodoListProps {
    list: Todo[]
}

export default function TodoList({ list }: TodoListProps) {
    return <ul>
        {list.map(todo => {
            return <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        })}
    </ul>
}