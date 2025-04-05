import { useState } from "react"
import { Todo } from "../types/TodosTypes"

interface TodoItemProps extends Todo {}

export default function TodoItem({ title, completed }: TodoItemProps) {
    const [com, setCom] = useState(completed)
    const handleChange = () => {
        setCom(prev => !prev)
    }
    return (
        <li>
            <input onChange={handleChange} type="checkbox" checked={com} />
            {title}
        </li>
    )
}