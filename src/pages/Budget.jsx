import React from 'react'
import BudgetCategory from '../components/budget-category/BudgetCategory'
import DonutChart from '../components/donut-chart/DonutChart'
import Transaction from '../components/transaction/Transaction'
import './Budget.css'

const Budget = () => {
    //category input
    const categoryRef = React.useRef("")

    //budget category list 
    const [categoryList, setCategoryList] = React.useState([])
    
    //for warning/popup text if user submit catgeory name empty
    const [noCategoryNameSubmit, setNoCategoryNameSubmit] = React.useState(false)

    //for transaction form
    const [goToTransaction, setGotToTransaction] = React.useState(false)

    //function will create new categorty in category secion
    const createCategory = (e) => {
        e.preventDefault()
        const categoryName = categoryRef.current.value
        if (categoryName === "") {
            setNoCategoryNameSubmit(true)
        } else {
            setCategoryList(prev => [
                ...prev, {categoryName, id: new Date().getTime()}
            ])
            categoryRef.current.value = ""
            setNoCategoryNameSubmit(false)
        }
    }

    return (
        <div className='page-container' style={{position: 'relative'}}>
            <h1 style={{ textAlign: 'center' }}>Budget</h1>
            <div className="budget_inner-container">
                <div className="budget_top">
                    <DonutChart />
                    <BudgetCategory
                        createCategory={createCategory}
                        categoryRef={categoryRef}
                        noCategoryNameSubmit={noCategoryNameSubmit}
                        categoryList={categoryList}
                        setCategoryList={setCategoryList}
                        setGotToTransaction={setGotToTransaction}
                    />
                </div>
            </div>
            {
                goToTransaction
                &&
                <Transaction
                    setGotToTransaction={setGotToTransaction}
                />
            }
        </div>
    )
}

export default Budget
