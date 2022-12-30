import React from 'react'
import {FaCheckCircle, FaTrashAlt} from 'react-icons/fa'

const SingleToDoTask = ({id, task, list, setList}) => {

    const [taskComplete, setTaskComplete] = React.useState(false)

    // handle the deletion of task
    const handleDelete = (id) => {
        const filteredList = list.filter(item => item.id !== id)
        setList(filteredList);
        localStorage.setItem('toDo', JSON.stringify(filteredList))
    }

    return (
        <div key={id} id={id} className="single-task">
            <span style={taskComplete ? {textDecoration:'line-through'}: {}}>{task}</span>
            <button title='Task complete' onClick={() => setTaskComplete(prev => !prev)}><FaCheckCircle /></button>
            <button title='Delete task' onClick={() => handleDelete(id)}><FaTrashAlt /></button>
        </div>
    )
}

export default SingleToDoTask
