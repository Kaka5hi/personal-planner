import React from 'react'
import './ToDoList.css'

const ToDoList = () => {

    const [toDo, setToDo] = React.useState('')
    const [list, setList] = React.useState([])

    const handleToDo = () => {
        setList(prev => [
            ...prev, toDo
            ]
        )
        setToDo('')
    }

    return (
        <div className='to-do_container'>
            <div className="to-do_input-container">
                <input 
                    type="text"
                    value={toDo}
                    onChange={(e) => setToDo(e.target.value)} 
                />
                <button onClick={handleToDo}>add</button>
            </div>
            <ol className="to-do_list-container">
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
        </div>
    )
}

export default ToDoList
