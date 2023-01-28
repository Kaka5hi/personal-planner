import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { FaTrashAlt } from 'react-icons/fa'
import { MdCreate } from 'react-icons/md'

import './BudgetCategory.css'

const BudgetCategory = ({ createCategory, categoryRef, categoryList, noCategoryNameSubmit, setCategoryList, showTransactionPopup}) => {
    
    const handleDeleteBudgetCategory = (id) => {
        const newList = categoryList.filter(item => item.id !== id)
        setCategoryList(newList)
    }

    return (
        <div className="budget_category">
            <h3>expense category</h3>
            <span>create expense categories like: Food, Rent, Saving etc.</span>
            <form onSubmit={createCategory}>
                <input
                    type="text"
                    placeholder="category name"
                    ref={categoryRef}
                />
                <button type="submit">
                    <FiPlus />
                </button>
            </form>
            {
                noCategoryNameSubmit
                &&
                <span className="budget_category_warning">Name cannot be empty</span>
            }
            <div className="category_chips-container">
                {
                    categoryList?.map(item => {
                    return (
                        <span key={item?.id} className="category_chips">
                            {item.categoryName}
                            <div className="chips_button">
                                <FaTrashAlt
                                    title="Delete Category"
                                    onClick={() => handleDeleteBudgetCategory(item?.id)}
                                    />
                                <MdCreate
                                    title="Go to transaction"
                                    onClick={()=> showTransactionPopup(item?.categoryName)}
                                    />
                            </div>
                        </span>
                    )})
                }
            </div>
        </div>
    )
}

export default BudgetCategory
