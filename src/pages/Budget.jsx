import React from 'react'
import BudgetCategory from '../components/budget-category/BudgetCategory'
import DonutChart from '../components/donut-chart/DonutChart'
import TransactionList from '../components/transaction-list/TransactionList'
import Transaction from '../components/transaction/Transaction'
import './Budget.css'

const Budget = () => {
    //category input
    const categoryRef = React.useRef("")

    // dummy chart data
    const data = {
        datasets: [
            {
                label: 'total expense',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
        labels: [],
    }

    //budget category list 
    const [categoryList, setCategoryList] = React.useState(JSON.parse(localStorage.getItem("transaction-category")) || [])

    //for warning/popup text if user submit catgeory name empty
    const [noCategoryWarning, setNoCategoryWarning] = React.useState({warning:false, msg:""})

    //for transaction form toggling
    const [goToTransaction, setGotToTransaction] = React.useState(false)

    // for selected current category
    const [currentCategory, setCurrentCurrentCategory] = React.useState('')

    // transaction list for displaying every transaction
    const [transactionList, setTransactionList] = React.useState(JSON.parse(localStorage.getItem("transaction-list")) || [])

    const [chartData, setChartData] = React.useState(JSON.parse(localStorage.getItem("chart-data")) || data)

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
            let tempChartData = { ...chartData }
            tempChartData.labels.push(categoryName)
            setChartData(tempChartData)
            categoryRef.current.value = ""
            setNoCategoryWarning({ warning: false, msg: "" })
        }
    }

    const showTransactionPopup = (currentCategory) => {
        setGotToTransaction(true)
        setCurrentCurrentCategory(currentCategory)
    }

    React.useEffect(() => {
        localStorage.setItem("transaction-list", JSON.stringify(transactionList))
        localStorage.setItem("transaction-category", JSON.stringify(categoryList))
        localStorage.setItem("chart-data", JSON.stringify(chartData))
    }, [transactionList, categoryList, chartData])

    return (
        <div className='page-container' style={{position: 'relative'}}>
            <h1 style={{ textAlign: 'center' }}>Budget</h1>
            <div className="budget_inner-container">
                <div className="budget_top">
                    <DonutChart
                        data={chartData}
                    />
                    <BudgetCategory
                        createCategory={createCategory}
                        categoryRef={categoryRef}
                        noCategoryWarning={noCategoryWarning}
                        categoryList={categoryList}
                        setCategoryList={setCategoryList}
                        showTransactionPopup={showTransactionPopup}
                        chartData={chartData}
                        setChartData={setChartData}
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
                    <span className="bugdet_transaction_smallnote">create expense categories like: Food, Rent, Saving etc.</span>
                    <div className="transaction_list-heading_container" >
                        <span>category</span>
                        <span>date</span>
                        <span>note</span>
                        <span>amount</span>
                    </div>
                    <div className="budget_bottom-inner">
                        {
                            transactionList?.map(item => <TransactionList key={item?.id} item={item}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget
