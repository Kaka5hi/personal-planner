import React from 'react'
import BudgetCategory from '../components/budget-category/BudgetCategory'
import DonutChart from '../components/donut-chart/DonutChart'
import TransactionList from '../components/transaction-list/TransactionList'
import Transaction from '../components/transaction/Transaction'
import './Budget.css'

const Budget = () => {
    //category input
    const categoryRef = React.useRef("")

    //budget category list 
    const [categoryList, setCategoryList] = React.useState([])

    //for warning/popup text if user submit catgeory name empty
    const [noCategoryNameSubmit, setNoCategoryNameSubmit] = React.useState(false)

    //for transaction form toggling
    const [goToTransaction, setGotToTransaction] = React.useState(false)

    // for selected current category
    const [currentCategory, setCurrentCurrentCategory] = React.useState('')

    // transaction list for displaying every transaction
    const [transactionList, setTransactionList] = React.useState([])

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

    const showTransactionPopup = (currentCategory) => {
        setGotToTransaction(true)
        setCurrentCurrentCategory(currentCategory)
    }

    React.useEffect(() => {
        localStorage.setItem("transaction-list", JSON.stringify(transactionList))
        localStorage.setItem("transaction-category", JSON.stringify(categoryList))
    }, [transactionList, categoryList])

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
                        showTransactionPopup={showTransactionPopup}
                    />
                </div>
            </div>
            {
                goToTransaction
                &&
                <Transaction
                    currentCategory={currentCategory}
                    setGotToTransaction={setGotToTransaction}
                    transactionList={transactionList}
                    setTransactionList={setTransactionList}
                />
            }
            {
                transactionList?.map(item => <TransactionList key={item?.id}/>)
            }
        </div>
    )
}

export default Budget
