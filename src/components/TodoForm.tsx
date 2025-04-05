interface TodoFormProps {
    onClick: () => void,
    onChange?:  React.ChangeEventHandler<HTMLInputElement>
}
export const TodoForm = function ({ onClick, onChange }: TodoFormProps) {
    return (
        <div>
            <input onChange={onChange} className="border-2 border-black p-2 mr-2" type="text" placeholder="Create new todo" />
            <button onClick={onClick} className="border-2 border-black p-2" type="button">Add Todo</button>
        </div>
    )
}