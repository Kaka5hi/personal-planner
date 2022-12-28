import React from 'react'
import './ToDoList.css'
import SingleToDoTask from '../single-to-do-task/SingleToDoTask'


const ToDoList = () => {

    const [toDo, setToDo] = React.useState('')
    const [list, setList] = React.useState([])
    const handleToDo = () => {
        setList(prev => [
            ...prev, {task: toDo, id:new Date().getTime().toString()}
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
            <div className="to-do_list-container">
                {list.map((item) => <SingleToDoTask key={item.id} id={item.id} task={item.task} list={list} setList={setList}/>)}
            </div>
        </div>
    )
}

export default ToDoList
