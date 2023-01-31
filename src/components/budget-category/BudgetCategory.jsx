import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { FaTrashAlt } from 'react-icons/fa'
import { MdCreate } from 'react-icons/md'

import './BudgetCategory.css'

const BudgetCategory = ({ createCategory, categoryRef, categoryList, noCategoryWarning, setCategoryList, showTransactionPopup,setChartData, chartData}) => {
    
    const handleDeleteBudgetCategory = (id, catName) => {
        const newList = categoryList.filter(item => item.id !== id)
        setCategoryList(newList)

        let filteredLabels = chartData.labels.filter(item => item !== catName);
        setChartData(prev => {
            return {
                ...prev,
                labels:filteredLabels
            }
        })
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
                noCategoryWarning?.warning
                &&
                <span className="budget_category_warning">{noCategoryWarning?.msg}</span>
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
                                    onClick={() => handleDeleteBudgetCategory(item?.id, item.categoryName)}
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
