import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import './Dropdown.css'

const Dropdown = ({type}) => {
    return (
        <div className='dropdown'>
            <p>Delete {type} <FaTrashAlt /></p>
        </div>
    )
}

export default Dropdown
