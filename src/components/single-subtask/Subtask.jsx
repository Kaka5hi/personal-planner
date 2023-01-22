import React from 'react'

const Subtask = ({ subtaskId, subtaskName, subtaskStatus, cardId, categoryId, updateSubtaskStatus }) => {
    
    const [status, setStatus] = React.useState(subtaskStatus)


    return (
        <div key={subtaskId} className='card_single-subtask'>
            <input
                type="checkbox"
                checked={status}
                onClick={() => setStatus(prev => !prev)}
                onChange={() => updateSubtaskStatus(subtaskId, status, cardId, categoryId)}
            />
            <p>{subtaskName}</p>
        </div>
    )
}

export default Subtask
