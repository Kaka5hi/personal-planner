import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import './Dropdown.css'

const Dropdown = ({type, setCategoryList, id, categoryList}) => {
    
    const handleCategoryDelete = (id) => {
        const filteredList = categoryList.filter(item => id !== item.category_id)
        setCategoryList(filteredList)
    }

    return (
        <div className='dropdown'>
            <p onClick={() => handleCategoryDelete(id)}>Delete {type} <FaTrashAlt /></p>
        </div>
    )
}

export default Dropdown
