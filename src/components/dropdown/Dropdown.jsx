import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import './Dropdown.css'

const Dropdown = ({type, setCategoryList, id, categoryList, deleteCard, cardId, categoryId}) => {
    
    const handleCategoryDelete = (id) => {
        const filteredList = categoryList.filter(item => id !== item.category_id)
        setCategoryList(filteredList)
    }

    return (
        <div className='dropdown'>
            <p onClick={type ==='category' ? () => handleCategoryDelete(id) : () => deleteCard(cardId, categoryId)}>Delete {type} <FaTrashAlt /></p>
        </div>
    )
}

export default Dropdown
