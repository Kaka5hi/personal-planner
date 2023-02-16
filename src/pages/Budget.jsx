import React from 'react'
import BudgetCategory from '../components/budget-category/BudgetCategory'
import DonutChart from '../components/donut-chart/DonutChart'
import TransactionList from '../components/transaction-list/TransactionList'
import Transaction from '../components/transaction/Transaction'
import {BiDownArrow, BiUpArrow} from 'react-icons/bi'
import './Budget.css'

const Budget = () => {
    //category input
    const categoryRef = React.useRef("")

    //budget category list 
    const [categoryList, setCategoryList] = React.useState(JSON.parse(localStorage.getItem('transaction-category')) || [])

    //for warning/popup text if user submit catgeory name empty
    const [noCategoryWarning, setNoCategoryWarning] = React.useState({warning:false, msg:""})

    //for transaction form toggling
    const [goToTransaction, setGotToTransaction] = React.useState(false)

    // for selected current category
    const [currentCategory, setCurrentCurrentCategory] = React.useState('')

    // transaction list for displaying every transaction
    const [transactionList, setTransactionList] = React.useState(JSON.parse(localStorage.getItem('transaction-list')) || [])

    // toggle transaction area
    const [showTransaction, setShowTransaction] = React.useState(false)

    //function will create new categorty in category secion
    const createCategory = (e) => {
        e.preventDefault()
        const categoryName = categoryRef.current.value
        const isCategoryAlreadyPresent = categoryList.find(item => item.categoryName === categoryName)
        if (categoryName === "") {
            setNoCategoryWarning({warning:true, msg:"Name cannot be empty"})
        } else if (isCategoryAlreadyPresent) {
            setNoCategoryWarning({warning:true, msg:"Category already exist"})
            categoryRef.current.value = ""
        } else {
            setCategoryList(prev => [
                ...prev, {categoryName, id: new Date().getTime()}
            ])
            categoryRef.current.value = ""
            setNoCategoryWarning({ warning: false, msg: "" })
        }
    }

    const showTransactionPopup = (currentCategory) => {
        setGotToTransaction(true)
        setCurrentCurrentCategory(currentCategory)
    }

    // function to calculate each category total sum
    const sumOfEachCategory = () => {
        const tempCatArray = categoryList.map(item => item.categoryName)
        let totalSumOfSingleCategory;
        let newData = []
        tempCatArray.forEach(element => {
            const categoryBasedInfo = transactionList.filter(item => item.currentCategory === element)
            const categoryBasedAmount = categoryBasedInfo.map(item => item?.amount)
            if (categoryBasedAmount.length === 0) {
                totalSumOfSingleCategory = 0
            } else {
                totalSumOfSingleCategory = categoryBasedAmount.reduce((a,b) => a+b)
            }
            newData.push(totalSumOfSingleCategory)
        })
        return newData;
    } 


    React.useEffect(() => {
        localStorage.setItem("transaction-list", JSON.stringify(transactionList))
        localStorage.setItem("transaction-category", JSON.stringify(categoryList))
    }, [transactionList, categoryList])

    return (
        <div className='page-container' style={{position: 'relative'}}>
            <h1 style={{ textAlign: 'center' }}>Expense Tracker</h1>
            <div className="budget_inner-container">
                <div className="budget_top">
                    <DonutChart
                        sumOfEachCategory={sumOfEachCategory}
                        categoryList={categoryList}
                    />
                    <BudgetCategory
                        createCategory={createCategory}
                        categoryRef={categoryRef}
                        noCategoryWarning={noCategoryWarning}
                        categoryList={categoryList}
                        setCategoryList={setCategoryList}
                        showTransactionPopup={showTransactionPopup}
                        setTransactionList={setTransactionList}
                    />
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
                <div className="budget_bottom">
                    <span>transaction history</span>
                    <span className="bugdet_transaction_smallnote">see your recent transaction here</span>
                    <div className="transaction_list-heading_container" style={showTransaction ? {display:'flex'} : {display:'none'}} >
                        <span>category</span>
                        <span>date</span>
                        <span>note</span>
                        <span>amount</span>
                    </div>
                    <div className="budget_bottom-inner" style={showTransaction ? {display:'flex'} : {display:'none'}}>
                        {
                            transactionList?.map(item => <TransactionList
                                key={item?.id}
                                item={item}
                            />)
                        }
                    </div>
                    <button
                        className="toggle-btn"
                        onClick={()=> setShowTransaction( prev => !prev )}
                    >{ showTransaction ? <BiUpArrow /> : <BiDownArrow />}</button>
                </div>
            </div>
        </div>
    )
}

export default Budget
