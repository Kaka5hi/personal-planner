import React from 'react'
import './Editable.css'
import {AiOutlinePlus} from 'react-icons/ai'


const Editable = () => {
    return (
        <div className='editable'>
            <p>
                <AiOutlinePlus /> new task
            </p>
        </div>
    )
}

export default Editable
