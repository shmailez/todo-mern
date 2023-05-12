import { useState } from "react"
import { addNewTodo } from "../redux/actions"
import { useDispatch } from "react-redux"

const TodoForm = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        dispatch(addNewTodo(text))

        setText('')
    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }

    return( 
    <>
        <form onSubmit={onFormSubmit}>
            <input 
            className="input general"
            value={text}
            type="text" 
            placeholder="Добавить новую задачу"
            onChange={onInputChange}
            />
        </form>
    </>
    )
}

export default TodoForm