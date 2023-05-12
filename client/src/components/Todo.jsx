import { useDispatch } from "react-redux"
import { toffleTodos, updateTodo, deleteTodo } from "../redux/actions"
import { useState } from "react"

const Todo = (todo) => {

    const [editing, setEditing] = useState(false)

    const [text, setText] = useState(todo.todo.data)

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        setEditing(prevState => !prevState)

        dispatch(updateTodo(todo.todo._id, text))
    }

   
    return <>
    <li>
    <span 
    onClick={() => dispatch(toffleTodos(todo.todo._id))}
    style={{ 
        display: editing ? 'none' : '' , 
        color: todo.todo.done ? '#fcf5ec' : '#fcf5ec',
        textDecoration: todo.todo.done ? 'line-through' : ''
    }}
    >{todo.todo.data}</span>
    <form 
        style={{display: editing ? 'inline' : 'none' ,}}
        onSubmit={onFormSubmit}
    >
        <input 
        className="input inner"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
    </form>
    <div className="span-groop">
    <span className="span-button" onClick={() => dispatch(deleteTodo(todo.todo._id))}>удалить</span>
    <span className="span-button" onClick={() => setEditing(prevState => !prevState)}>исправить</span>
    </div>
    
    </li>        
    </>
}

export default Todo